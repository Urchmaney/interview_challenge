import express, { Request, Response, NextFunction } from 'express';
import { authRouter } from './routes/auth';
import { transactionRouter } from './routes/transaction';

const bodyParser = require('body-parser')

 
const app: express.Application = express();

app.use(bodyParser.json());

const port: number = 3000;

app.use('/api/auth', authRouter);

app.use('/api/transactions', transactionRouter);
 
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});