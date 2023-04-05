"use strict";
var config = require('./knexfile');
var environment = process.env.ENVIRONMENT || 'development';
var environmentConfig = config[environment];
module.exports = require('knex')(environmentConfig);
