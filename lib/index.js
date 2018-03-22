const github = require('./github');
const os = require('os');
const path = require('path');
const slackBot = require('slackbots');
const _ = require('lodash');
const moment = require('moment-timezone');
const yn = require('yn');

// Replace these with your team's info
// Two mappings: GH usernames to Slack user IDs, and GH usernames to Slack user names
const slackIds = JSON.parse(process.env.GITHUB_SLACK_IDS);
const githubUsers = JSON.parse(process.env.GITHUB_SLACK_USERNAMES);

// Configurable settings
const interval = parseFloat(process.env.GITHUB_SLACK_REMINDER_INTERVAL) || 2;
const orgs = process.env.ORGANIZATIONS;
const timezones = JSON.parse(process.env.GITHUB_TIME_ZONES)
const workStart = process.env.WORK_START || 10; // Start of the workday in hours
const workEnd = process.env.WORK_END || 18; // End of workday
const workWeekends = yn(process.env.WORK_WEEKENDS) || false; // Should be functional on weekends? (hopefully not!)

// Create instance of the bot
const bot = new slackBot({
  name: 'snowball',
  token: process.env.REMINDER_TOKEN
});

let snoozed = [];

const self = module.exports = {
  startBot: (data) => {
    bot.on('start', (data) => {
      const params = {
        icon_url: 'https://avatars.slack-edge.com/2017-05-23/186302031456_247b555e470ae075e2a4_48.jpg',
        as_user: false
      };

      // Get all open pull requests for reference
      getOpenPullRequests = (orgs) => {
        github.allOrgsRepos(orgs).then(orgRepos => {
          const repos = [].concat(...orgRepos);
          return github.getOpenPullRequestInfo(repos);
        }).then(prInfo => {
          const pullInfo = [].concat(...prInfo);
          return github.referenceOpenPulls(pullInfo);
        }).catch((err) => {
          console.log(err);
        });
      };

      // Get all reivewers requested
      getReviewersRequested = (githubUserNames, now, orgs, githubUser) => {
        github.allOrgsRepos(orgs).then(orgRepos => {
          const repos = [].concat(...orgRepos);
          return github.composePullRequestSlugs(repos);
        }).then(prSlugs => {
          const slugs = [].concat(...prSlugs);
          return github.composeRequest(slugs);
        }).then(requestArgs => {
          const requests = [].concat(...requestArgs);
          return github.allReviewsRequested(requests);
        }).then(reviews => {
          const reviewers = [].concat(...reviews);
          return github.mapReviewsRequestedtoPRs(reviewers);
        }).then(reviewersRequested => {
          const allReviewers = [].concat(...reviewersRequested); // allReviewers is actually a list of everybody with an open PR.
          return messageReviewers(githubUserNames, allReviewers, now, githubUser);
        }).catch((err) => {
          console.log(err);
        });
      };

      // Sort out pull requests based on whether they're approved
      parsePullRequests = (githubUserNames, now, orgs, githubUser) => {
        github.allOrgsRepos(orgs).then(orgRepos => {
          const repos = [].concat(...orgRepos);
          return github.composePullRequestSlugs(repos);
        }).then(prSlugs => {
          const slugs = [].concat(...prSlugs);
          return github.composeRequest(slugs);
        }).then(requestArgs => {
          const requests = [].concat(...requestArgs);
          return github.allReviews(requests);
        }).then(reviews => {
          const data = [].concat(...reviews);
          return github.getMostRecentReviews(data);
        }).then(reviews => {
          const recentReviews = [].concat(...reviews);
          return github.matchPulls(recentReviews);
        }).then(matchedPulls => {
          return github.approvedOrNot(matchedPulls); // matchedPulls - These are PRs with with either CHANGES_REQUESTED or APPROVED.
        }).then(parsedPulls => {
          messageAuthors(githubUserNames, parsedPulls, now, githubUser); // puts the matched pulls into a dictionary structure.
        }).catch((err) => {
          console.log(err);
        });
      };

      // Message PR authors with info on PRs either approved or with changes requested
      messageAuthors = (githubUserNames, parsedPulls, now, githubUser) => {
        // Iterate through the parsedPulls arr which will contain approved and not approved PRs objs
        // in separate arrs. Generate different messages based on PR review state.
        const approvedPulls = parsedPulls.approved;
        const changesRequestedPulls = parsedPulls.notApproved;

        // Send messages to authors of approved PRs that are ready to merge
        approvedPulls.forEach((pullRequest) => {
          const author = pullRequest['author'];
          const created = new Date(pullRequest['created_at']).toString();
          const notSnoozed = !snoozed.includes(slackIds[author]);
          const recipient = githubUsers[author];
          const title = pullRequest['title'];
          const url = pullRequest['pr_url'];


          const message = 
            "You have a PR that's been approved and can be merged. " +
            "Please merge this PR soon or I'll keep pestering you about it. " +
            "\nApproved PRs that can be merged: \n" +
            "\tTitle: " + title + "\n" +
            "\tLink: " + url + "\n" + 
            "\tCreated at: " + created;

          // Checks whether or not this message should be sent to all authors
          if (approvedPulls.length && githubUser == undefined) {
            // Don't send messages to people who snoozed reminders
            if (notSnoozed && githubUserNames.includes(author)) {
              console.log(recipient, now, message, params);
              bot.postMessageToUser(recipient, message, params);
            }
          // or if it is just going to a specific user for on-demand reminders  
          } else if (approvedPulls.length && githubUser != undefined) {
            if (notSnoozed && recipient == githubUser) {
              console.log(recipient, now, message, params);
              bot.postMessageToUser(recipient, message, params);
            }
          }
        });

        // Send message to authors of PRs that require changes to be made
        changesRequestedPulls.forEach((pullRequest) => {
          const author = pullRequest['author'];
          const created = new Date(pullRequest['created_at']).toString();
          const notSnoozed = !snoozed.includes(slackIds[author]);
          const recipient = githubUsers[author];
          const title = pullRequest['title'];
          const url = pullRequest['pr_url'];

          const message = 
            "Reviewers on these PRs by you have requested changes. " +
            "Make some changes, or close the PR. Otherwise, I'll keep bothering you about it. " +
            "\nPRs requiring changes: \n" +
            "\tTitle: " + title + "\n" +
            "\tLink: " + url + "\n" + 
            "\tCreated at: " + created;

          if (changesRequestedPulls.length && githubUser == undefined) {
            if (notSnoozed && githubUserNames.includes(author)) {
              console.log(recipient, now, message, params);
              bot.postMessageToUser(recipient, message, params);
            }
          } else if (changesRequestedPulls.length && githubUser != undefined) {
            if (notSnoozed && recipient == githubUser) {
              console.log(recipient, now, message, params);
              bot.postMessageToUser(recipient, message, params);
            }
          }
        })
      };

      // Message all users who have been requested to review a pull request
      messageReviewers = (githubUserNames, allReviewers, now, githubUser) => {
        allReviewers.forEach((pullRequest) => {
          const author = pullRequest['author'];
          const created = new Date(pullRequest['created']).toString();
          const title = pullRequest['pr_title'];
          const url = pullRequest['pr_url'];
          const reviewersRequested = pullRequest['reviewers_requested'];

          const message = 
            "You've been asked to review the following PR. " +
            "Review it or I'll keep bothering you about it. " + "\n" +
            "\tTitle: " + title + "\n" +
            "\tAuthor: " + author + "\n" +
            "\tLink: " + url + "\n" + 
            "\tCreated at: " + created + "\n";

          // Reviewers requested reminders without filtering for a specific user
          if (reviewersRequested.length && githubUser == undefined) {
            for (let i in reviewersRequested) {
              var reviewer = reviewersRequested[i]['login'];

              if (!snoozed.includes(slackIds[reviewer]) && githubUserNames.includes(reviewer)) {
                console.log(githubUsers[reviewer], now, message, params);
                bot.postMessageToUser(githubUsers[reviewer], message, params);
              }
            }
          // This filters for a specific user for on demand reminders
          } else if (reviewersRequested.length && githubUser != undefined) {
            for (let i in reviewersRequested) {
              var reviewer = reviewersRequested[i]['login'];
              const recipient = githubUsers[reviewer];

              if (!snoozed.includes(slackIds[reviewer]) && recipient == githubUser) {
                console.log(recipient, now, message, params);
                bot.postMessageToUser(recipient, message, params);
              }
            }
          }
        });
      };

      // Gets Slack username from ID then passes to functions that retrieve reminders
      // This is called by a slack command.
      remindUser = (slackUserId) => {        
        const githubUser = _.findKey(slackIds, _.partial(_.isEqual, slackUserId));
        const now = new Date();
        const slackUser = githubUsers[githubUser];

        bot.postMessageToUser(slackUser, "If you have any pending remidners, they will show up below shortly." + "\n" + 
          "If nothing shows up, then you're in the clear!", params);

        // These reminders will be filtered for the user requesting the reminders
        getReviewersRequested(now, orgs, githubUser);
        parsePullRequests(now, orgs, githubUser);
      };

      init = () => {

        const now = moment.utc();

        // iterrate through timezones.
        for (var timezoneKey in timezones) {

            // remove UTC from the date string.
            // e.g. go from "2018-03-21T23:57:16+02:00" -> "2018-03-21T23:57:16+02:00"
            const timezoneTimeString = moment.tz(now, timezoneKey).format().slice(0,-6);

            // create a timezoneDate at the local time, whatever that is, doesn't matter. We just need the hours and
            // minutes.
            // e.g. Thu Mar 22 2018 00:00:52 GMT-0400 (EDT)
            const timezoneDate = new Date(timezoneTimeString);
            const hours = timezoneDate.getHours();
            const day = timezoneDate.getDay();
            const minutes = timezoneDate.getMinutes();

            let validWorkday = day != 0 && day != 6;
            if (workWeekends) {
                validWorkday = true;
            }

            console.log(`What is going on - utc time: ${now}, timezone: ${timezoneKey}, local hours: ${hours}, local day: ${day}`);

            // Only execute the poller when it's during working hours on weekdays
            const isMorningPingTime = (hours == 9 && (parseInt(minutes / 10) == 3));
            const isAfterNoonPingTime = (hours == 13 && (parseInt(minutes / 10) == 3));

            if (validWorkday && (isMorningPingTime || isAfterNoonPingTime)) {
                console.log('Starting to get PR info');
                getOpenPullRequests(orgs);
                // Sends a message to reviewers.
                getReviewersRequested(timezones[timezoneKey], timezoneDate, orgs);
                // Sends a message to authors.
                parsePullRequests(timezones[timezoneKey], timezoneDate, orgs);
            } else {
                console.log('All work and no play makes Jack a dull boy.');
            }

            // Polls every 10 min.
            setTimeout(init, 10 * 60 * 1000);

            // Clear snoozes at end of each work day
            if (hours > workEnd && snoozed.length) {
                snoozed.length = 0;
            }
        }
      };
      init();
    });
  },

  botMsg: (data) => {
    // Mostly easter eggs
    bot.on('message', (data) => {
      const params = {
        icon_url: 'https://avatars.slack-edge.com/2017-05-23/186302031456_247b555e470ae075e2a4_48.jpg',
        as_user: false
      };

      if(data.type === 'message') {
        if(data.username === 'snowball') {
          return;
        }

        checkText = (msg) => {
          if (data.text.toLowerCase().indexOf(msg) !== -1) {
            return true;
          }
        };

        const channel = data.channel;
        const not_snowball = (data.username != 'snowball');
        const slackUser = githubUsers[_.findKey(slackIds, _.partial(_.isEqual, data.user))];

        if (not_snowball) {
          if (checkText('snuffles')) {
            bot.postMessage(channel, "Do not call me that!", params);
          }
          // Fetch command, on demand reminders
          if (checkText('snowball-fetch')) {
            remindUser(data.user);
          }
          // Snooze command
          if (checkText('snowball-snooze')) {
            // Don't push to snoozed if user already is in the array
            if (!snoozed.includes(data.user)) {
              snoozed.push(data.user);
              bot.postMessageToUser(slackUser, "OK, I'll snooze your reminders until tomorrow.", params);          
            } else {
              bot.postMessageToUser(slackUser, "You've already snoozed reminders for today.", params);
            }
          }
          // Resume reminders command
          if (checkText('snowball-resume')) {
            // Check if user is snoozed
            if (snoozed.includes(data.user) && snoozed.length) {
              let user = snoozed.indexOf(data.user);
              snoozed.splice(user, 1);
              bot.postMessageToUser(slackUser, "OK, I'll start sending reminders to you again.", params);
            } else {
              bot.postMessageToUser(slackUser, "You haven't snoozed reminders.", params);
            }
          }
        }
      }
    });
  }
};
