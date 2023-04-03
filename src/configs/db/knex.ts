const environment = process.env.ENVIRONMENT || 'development';
const environmentConfig = require('../../../knexfile')[environment];
const knex = require('knex')(environmentConfig);
module.exports = knex;

