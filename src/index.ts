import express from 'express';
import { authRouter } from './routes/auth';
import { walletRouter } from './routes/wallet';
import { Knex } from "knex/types";
import bodyParser = require('body-parser');


const knex: Knex<any, unknown[]> = require('./configs/db/knex');

const app: express.Application = express();

app.use(bodyParser.json());

const port = 3000;

app.use('/api/auth', authRouter);

app.use('/api/wallets/', walletRouter);

knex.migrate.latest().then(() => {
  console.log("Migration Successed");
}).catch((err) => {
  console.log('Error Migrating DB =====', err)
})
 
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});