import { Knex } from "knex";
const dotenv = require("dotenv");
dotenv.config({ path: '../../../.env' });

const  config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST,
      port: 3306,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: process.env.DATABASE_HOST,
      port: 3306,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + '/migrations',
    }
  }

};

module.exports =  config;
