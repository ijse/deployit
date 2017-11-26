#!/bin/env node
const Shipit = require('shipit')
const init = require('./lib/deploy.js')

// get configs
const pkg = require(process.cwd() + '/package.json')

// call shipit
const shipit = new Shipit({
    environment: 'online'
})
init(shipit, pkg)

shipit.initialize()

shipit.start(['default'])

