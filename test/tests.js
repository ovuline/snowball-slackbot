const github = require('../lib/github');

var assert = require('assert');

var allReviewsJSON =  [
    {
        "id": 108634055,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "Looks ok to me! I didn't see anywhere else in frontend that uses the old function, so seems like a safe change.",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/frontend/pull/912#pullrequestreview-108634055",
        "pull_request_url": "https://api.github.com/repos/ovuline/frontend/pulls/912",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/frontend/pull/912#pullrequestreview-108634055"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/frontend/pulls/912"
            }
        },
        "submitted_at": "2018-04-02T14:50:37Z",
        "commit_id": "9e42cf57e4d3724115312185c908024729ff9533"
    },
    {
        "id": 108647532,
        "user": {
            "login": "roconnor09",
            "id": 1048654,
            "avatar_url": "https://avatars3.githubusercontent.com/u/1048654?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/roconnor09",
            "html_url": "https://github.com/roconnor09",
            "followers_url": "https://api.github.com/users/roconnor09/followers",
            "following_url": "https://api.github.com/users/roconnor09/following{/other_user}",
            "gists_url": "https://api.github.com/users/roconnor09/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/roconnor09/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/roconnor09/subscriptions",
            "organizations_url": "https://api.github.com/users/roconnor09/orgs",
            "repos_url": "https://api.github.com/users/roconnor09/repos",
            "events_url": "https://api.github.com/users/roconnor09/events{/privacy}",
            "received_events_url": "https://api.github.com/users/roconnor09/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "one minor comment, but looks good otherwise",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/frontend/pull/912#pullrequestreview-108647532",
        "pull_request_url": "https://api.github.com/repos/ovuline/frontend/pulls/912",
        "author_association": "OWNER",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/frontend/pull/912#pullrequestreview-108647532"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/frontend/pulls/912"
            }
        },
        "submitted_at": "2018-04-02T15:38:22Z",
        "commit_id": "9e42cf57e4d3724115312185c908024729ff9533"
    },
    {
        "id": 108688140,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/frontend/pull/912#pullrequestreview-108688140",
        "pull_request_url": "https://api.github.com/repos/ovuline/frontend/pulls/912",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/frontend/pull/912#pullrequestreview-108688140"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/frontend/pulls/912"
            }
        },
        "submitted_at": "2018-04-02T18:00:57Z",
        "commit_id": "4daeecd0dbda2ee8ff61b9bcfb5e74f99370af44"
    },
    {
        "id": 107045629,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "I approve this but it shouldn't be merged yet.",
        "state": "CHANGES_REQUESTED",
        "html_url": "https://github.com/ovuline/frontend/pull/907#pullrequestreview-107045629",
        "pull_request_url": "https://api.github.com/repos/ovuline/frontend/pulls/907",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/frontend/pull/907#pullrequestreview-107045629"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/frontend/pulls/907"
            }
        },
        "submitted_at": "2018-03-26T19:43:30Z",
        "commit_id": "aeb64ed39f5ccf0b29d2832477d06173fd12a5b3"
    },
    {
        "id": 98352529,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "Requesting changes just so that this doesn't merge, but I actually approve it!",
        "state": "CHANGES_REQUESTED",
        "html_url": "https://github.com/ovuline/frontend/pull/890#pullrequestreview-98352529",
        "pull_request_url": "https://api.github.com/repos/ovuline/frontend/pulls/890",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/frontend/pull/890#pullrequestreview-98352529"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/frontend/pulls/890"
            }
        },
        "submitted_at": "2018-02-21T20:42:19Z",
        "commit_id": "a2a21916cc3468856bfe218cb859b43c3a4096a7"
    },
    {
        "id": 109486324,
        "user": {
            "login": "cjheng",
            "id": 1130396,
            "avatar_url": "https://avatars1.githubusercontent.com/u/1130396?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cjheng",
            "html_url": "https://github.com/cjheng",
            "followers_url": "https://api.github.com/users/cjheng/followers",
            "following_url": "https://api.github.com/users/cjheng/following{/other_user}",
            "gists_url": "https://api.github.com/users/cjheng/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cjheng/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cjheng/subscriptions",
            "organizations_url": "https://api.github.com/users/cjheng/orgs",
            "repos_url": "https://api.github.com/users/cjheng/repos",
            "events_url": "https://api.github.com/users/cjheng/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cjheng/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "Everything I've checked still works as expected and all of the changes were previously reviewed in their separate task PRs.\r\n\r\nHowever, since I made most of the changes for this PR and have been resolving conflicts while keeping it up to date with dev, I defer to @fennelouski, @nservidio, and @reschneebaum for final review and merging of this PR.",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/ovia-ios/pull/697#pullrequestreview-109486324",
        "pull_request_url": "https://api.github.com/repos/ovuline/ovia-ios/pulls/697",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ovia-ios/pull/697#pullrequestreview-109486324"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ovia-ios/pulls/697"
            }
        },
        "submitted_at": "2018-04-04T20:26:17Z",
        "commit_id": "44cfa01bd4483a9951293ac2c53b56301d7744c8"
    },
    {
        "id": 109510863,
        "user": {
            "login": "fennelouski",
            "id": 2965903,
            "avatar_url": "https://avatars1.githubusercontent.com/u/2965903?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/fennelouski",
            "html_url": "https://github.com/fennelouski",
            "followers_url": "https://api.github.com/users/fennelouski/followers",
            "following_url": "https://api.github.com/users/fennelouski/following{/other_user}",
            "gists_url": "https://api.github.com/users/fennelouski/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/fennelouski/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/fennelouski/subscriptions",
            "organizations_url": "https://api.github.com/users/fennelouski/orgs",
            "repos_url": "https://api.github.com/users/fennelouski/repos",
            "events_url": "https://api.github.com/users/fennelouski/events{/privacy}",
            "received_events_url": "https://api.github.com/users/fennelouski/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "A couple _really_ minor things.\r\n\r\nGreat work!",
        "state": "CHANGES_REQUESTED",
        "html_url": "https://github.com/ovuline/ovia-ios/pull/697#pullrequestreview-109510863",
        "pull_request_url": "https://api.github.com/repos/ovuline/ovia-ios/pulls/697",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ovia-ios/pull/697#pullrequestreview-109510863"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ovia-ios/pulls/697"
            }
        },
        "submitted_at": "2018-04-04T22:07:14Z",
        "commit_id": "44cfa01bd4483a9951293ac2c53b56301d7744c8"
    },
    {
        "id": 109351396,
        "user": {
            "login": "nofranc",
            "id": 6992956,
            "avatar_url": "https://avatars0.githubusercontent.com/u/6992956?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nofranc",
            "html_url": "https://github.com/nofranc",
            "followers_url": "https://api.github.com/users/nofranc/followers",
            "following_url": "https://api.github.com/users/nofranc/following{/other_user}",
            "gists_url": "https://api.github.com/users/nofranc/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nofranc/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nofranc/subscriptions",
            "organizations_url": "https://api.github.com/users/nofranc/orgs",
            "repos_url": "https://api.github.com/users/nofranc/repos",
            "events_url": "https://api.github.com/users/nofranc/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nofranc/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/ovia-angular/pull/232#pullrequestreview-109351396",
        "pull_request_url": "https://api.github.com/repos/ovuline/ovia-angular/pulls/232",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ovia-angular/pull/232#pullrequestreview-109351396"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ovia-angular/pulls/232"
            }
        },
        "submitted_at": "2018-04-04T14:28:48Z",
        "commit_id": "d77be353a2baad9d534741e91dfec48ddac1d019"
    },
    {
        "id": 109861467,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "CHANGES_REQUESTED",
        "html_url": "https://github.com/ovuline/ovia-angular-common/pull/148#pullrequestreview-109861467",
        "pull_request_url": "https://api.github.com/repos/ovuline/ovia-angular-common/pulls/148",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ovia-angular-common/pull/148#pullrequestreview-109861467"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ovia-angular-common/pulls/148"
            }
        },
        "submitted_at": "2018-04-05T20:16:20Z",
        "commit_id": "6d68809867818f91972fa8bacdb356d4a3f0d059"
    },
    {
        "id": 109866735,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/ovia-angular-common/pull/148#pullrequestreview-109866735",
        "pull_request_url": "https://api.github.com/repos/ovuline/ovia-angular-common/pulls/148",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ovia-angular-common/pull/148#pullrequestreview-109866735"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ovia-angular-common/pulls/148"
            }
        },
        "submitted_at": "2018-04-05T20:32:32Z",
        "commit_id": "c9aa5b89569da5dd9e8ab4c95d3ddca3c6fcc47f"
    },
    {
        "id": 109332460,
        "user": {
            "login": "nofranc",
            "id": 6992956,
            "avatar_url": "https://avatars0.githubusercontent.com/u/6992956?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nofranc",
            "html_url": "https://github.com/nofranc",
            "followers_url": "https://api.github.com/users/nofranc/followers",
            "following_url": "https://api.github.com/users/nofranc/following{/other_user}",
            "gists_url": "https://api.github.com/users/nofranc/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nofranc/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nofranc/subscriptions",
            "organizations_url": "https://api.github.com/users/nofranc/orgs",
            "repos_url": "https://api.github.com/users/nofranc/repos",
            "events_url": "https://api.github.com/users/nofranc/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nofranc/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/ovia-angular-common/pull/147#pullrequestreview-109332460",
        "pull_request_url": "https://api.github.com/repos/ovuline/ovia-angular-common/pulls/147",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ovia-angular-common/pull/147#pullrequestreview-109332460"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ovia-angular-common/pulls/147"
            }
        },
        "submitted_at": "2018-04-04T13:46:24Z",
        "commit_id": "ebb8979f350fd40b7cf2237dd29facc22f96a891"
    },
    {
        "id": 109499455,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/ad-platform/pull/244#pullrequestreview-109499455",
        "pull_request_url": "https://api.github.com/repos/ovuline/ad-platform/pulls/244",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ad-platform/pull/244#pullrequestreview-109499455"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ad-platform/pulls/244"
            }
        },
        "submitted_at": "2018-04-04T21:03:52Z",
        "commit_id": "4129bd228f4febeb7db675595b0338ab2e08c18f"
    },
    {
        "id": 109806030,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "CHANGES_REQUESTED",
        "html_url": "https://github.com/ovuline/ad-platform/pull/244#pullrequestreview-109806030",
        "pull_request_url": "https://api.github.com/repos/ovuline/ad-platform/pulls/244",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ad-platform/pull/244#pullrequestreview-109806030"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ad-platform/pulls/244"
            }
        },
        "submitted_at": "2018-04-05T20:07:52Z",
        "commit_id": "13d83e4ed00c7bf9d10c1c5864d1e3f0691fe5c4"
    },
    {
        "id": 109861735,
        "user": {
            "login": "ebiewald",
            "id": 5797897,
            "avatar_url": "https://avatars1.githubusercontent.com/u/5797897?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ebiewald",
            "html_url": "https://github.com/ebiewald",
            "followers_url": "https://api.github.com/users/ebiewald/followers",
            "following_url": "https://api.github.com/users/ebiewald/following{/other_user}",
            "gists_url": "https://api.github.com/users/ebiewald/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ebiewald/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ebiewald/subscriptions",
            "organizations_url": "https://api.github.com/users/ebiewald/orgs",
            "repos_url": "https://api.github.com/users/ebiewald/repos",
            "events_url": "https://api.github.com/users/ebiewald/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ebiewald/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/ad-platform/pull/244#pullrequestreview-109861735",
        "pull_request_url": "https://api.github.com/repos/ovuline/ad-platform/pulls/244",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ad-platform/pull/244#pullrequestreview-109861735"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ad-platform/pulls/244"
            }
        },
        "submitted_at": "2018-04-05T20:17:03Z",
        "commit_id": "b202b120ffe9ed5e809de816f945733874eafa10"
    },
    {
        "id": 109352221,
        "user": {
            "login": "nofranc",
            "id": 6992956,
            "avatar_url": "https://avatars0.githubusercontent.com/u/6992956?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nofranc",
            "html_url": "https://github.com/nofranc",
            "followers_url": "https://api.github.com/users/nofranc/followers",
            "following_url": "https://api.github.com/users/nofranc/following{/other_user}",
            "gists_url": "https://api.github.com/users/nofranc/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nofranc/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nofranc/subscriptions",
            "organizations_url": "https://api.github.com/users/nofranc/orgs",
            "repos_url": "https://api.github.com/users/nofranc/repos",
            "events_url": "https://api.github.com/users/nofranc/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nofranc/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/ad-platform/pull/242#pullrequestreview-109352221",
        "pull_request_url": "https://api.github.com/repos/ovuline/ad-platform/pulls/242",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ad-platform/pull/242#pullrequestreview-109352221"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ad-platform/pulls/242"
            }
        },
        "submitted_at": "2018-04-04T14:30:21Z",
        "commit_id": "a5ab640499ea58ac347334988874a18a2a1e520b"
    },
    {
        "id": 110163829,
        "user": {
            "login": "akusakov",
            "id": 6586126,
            "avatar_url": "https://avatars0.githubusercontent.com/u/6586126?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/akusakov",
            "html_url": "https://github.com/akusakov",
            "followers_url": "https://api.github.com/users/akusakov/followers",
            "following_url": "https://api.github.com/users/akusakov/following{/other_user}",
            "gists_url": "https://api.github.com/users/akusakov/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/akusakov/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/akusakov/subscriptions",
            "organizations_url": "https://api.github.com/users/akusakov/orgs",
            "repos_url": "https://api.github.com/users/akusakov/repos",
            "events_url": "https://api.github.com/users/akusakov/events{/privacy}",
            "received_events_url": "https://api.github.com/users/akusakov/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "Looks good, just one remark",
        "state": "APPROVED",
        "html_url": "https://github.com/ovuline/ovia-android-apps/pull/277#pullrequestreview-110163829",
        "pull_request_url": "https://api.github.com/repos/ovuline/ovia-android-apps/pulls/277",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ovia-android-apps/pull/277#pullrequestreview-110163829"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ovia-android-apps/pulls/277"
            }
        },
        "submitted_at": "2018-04-06T18:28:46Z",
        "commit_id": "c91c6e2db827bdda54ca4163f2f4cc8c90d93ffe"
    },
    {
        "id": 110163752,
        "user": {
            "login": "nf1213",
            "id": 7142946,
            "avatar_url": "https://avatars2.githubusercontent.com/u/7142946?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nf1213",
            "html_url": "https://github.com/nf1213",
            "followers_url": "https://api.github.com/users/nf1213/followers",
            "following_url": "https://api.github.com/users/nf1213/following{/other_user}",
            "gists_url": "https://api.github.com/users/nf1213/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nf1213/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nf1213/subscriptions",
            "organizations_url": "https://api.github.com/users/nf1213/orgs",
            "repos_url": "https://api.github.com/users/nf1213/repos",
            "events_url": "https://api.github.com/users/nf1213/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nf1213/received_events",
            "type": "User",
            "site_admin": false
        },
        "body": "Looks pretty good to me. I did find a few major blockesr: I tested on an Android version 4.4.2 device and got a crash:\r\n\r\n```\r\n04-06 15:07:20.780 16534-16534/com.ovuline.pregnancy.debug E/AndroidRuntime: FATAL EXCEPTION: main\r\n    Process: com.ovuline.pregnancy.debug, PID: 16534\r\n    java.lang.NullPointerException\r\n        at com.ovuline.ovia.ui.fragment.settings.BaseHealthPlanFragment.lambda$checkLocation$0$BaseHealthPlanFragment(BaseHealthPlanFragment.java:1045)\r\n        at com.ovuline.ovia.ui.fragment.settings.BaseHealthPlanFragment$$Lambda$0.onComplete(Unknown Source)\r\n        at com.google.android.gms.tasks.zzf.run(Unknown Source)\r\n        at android.os.Handler.handleCallback(Handler.java:733)\r\n        at android.os.Handler.dispatchMessage(Handler.java:95)\r\n        at android.os.Looper.loop(Looper.java:136)\r\n        at android.app.ActivityThread.main(ActivityThread.java:5118)\r\n        at java.lang.reflect.Method.invokeNative(Native Method)\r\n        at java.lang.reflect.Method.invoke(Method.java:515)\r\n        at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:790)\r\n        at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:606)\r\n        at dalvik.system.NativeStart.main(Native Method)\r\n```\r\nand a different one on fertility\r\n\r\n```\r\n04-06 15:08:12.950 16990-16990/com.ovuline.fertility.debug E/AndroidRuntime: FATAL EXCEPTION: main\r\n    Process: com.ovuline.fertility.debug, PID: 16990\r\n    java.lang.ClassCastException: com.ovuline.fertility.ui.fragments.HealthPlanFragment cannot be cast to android.support.v13.app.FragmentCompat$OnRequestPermissionsResultCallback\r\n        at android.support.v13.app.FragmentCompat$FragmentCompatBaseImpl$1.run(FragmentCompat.java:100)\r\n        at android.os.Handler.handleCallback(Handler.java:733)\r\n        at android.os.Handler.dispatchMessage(Handler.java:95)\r\n        at android.os.Looper.loop(Looper.java:136)\r\n        at android.app.ActivityThread.main(ActivityThread.java:5118)\r\n        at java.lang.reflect.Method.invokeNative(Native Method)\r\n        at java.lang.reflect.Method.invoke(Method.java:515)\r\n        at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:790)\r\n        at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:606)\r\n        at dalvik.system.NativeStart.main(Native Method)\r\n``` \r\nSo, please address these. Other than that, I just had some small remarks/questions.",
        "state": "CHANGES_REQUESTED",
        "html_url": "https://github.com/ovuline/ovia-android-apps/pull/276#pullrequestreview-110163752",
        "pull_request_url": "https://api.github.com/repos/ovuline/ovia-android-apps/pulls/276",
        "author_association": "CONTRIBUTOR",
        "_links": {
            "html": {
                "href": "https://github.com/ovuline/ovia-android-apps/pull/276#pullrequestreview-110163752"
            },
            "pull_request": {
                "href": "https://api.github.com/repos/ovuline/ovia-android-apps/pulls/276"
            }
        },
        "submitted_at": "2018-04-06T19:09:52Z",
        "commit_id": "aa3341cd170490d278dfb31a34800a3f5ab6173e"
    }
]

describe('github', function() {
    describe('#getMostRecentReviews()', function() {
        it('should return all most recent reviews', function() {
            // TODO: Handle this with chai.
            try {
                github.getMostRecentReviews(allReviewsJSON).then(data => {
                    assert.equal(data.length, 11);
                }, function(error) {
                    console.log(error.message);
                    assert.fail(error);
                });
            } catch (error) {
                console.log(error.message);
                assert.fail(error);
            }
        });
    });
});