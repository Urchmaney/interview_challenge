"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var r = dotenv.config({ path: '../../../.env' });
var config = {
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
module.exports = config;
