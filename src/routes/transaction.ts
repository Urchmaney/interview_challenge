import { Router } from 'express';
import { withdraw, deposit, transfer } from '../controllers/transactionController';
import { tokenAuthMiddlewear } from '../middlewears/authMiddlewear'

export const transactionRouter: Router = Router();

transactionRouter.use(tokenAuthMiddlewear)

transactionRouter.post('/withdraw', withdraw);

transactionRouter.post('/deposit', deposit);

transactionRouter.post('/transfer', transfer);
