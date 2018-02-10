#!/usr/bin/env node
const express = require('express')
const PORT = process.env.PORT || 5000

express().listen(PORT, () => console.log(`Listening on ${ PORT }`))

const snowball = require('../lib/index.js');

snowball.startBot();
snowball.botMsg();
