const config = require('./knexfile');
const environment = process.env.ENVIRONMENT || 'development';
const environmentConfig = config[environment];
module.exports = require('knex')(environmentConfig);

