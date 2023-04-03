import { Knex } from "knex";
import {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME
} from './src/utils/constants';




const  config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql',
    connection: {
      host: DATABASE_HOST,
      port: 3306,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME
    },
    migrations: {
      directory: __dirname + '/src/configs/db/migrations',
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: DATABASE_HOST,
      port: 3306,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;