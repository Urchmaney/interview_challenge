import { Router } from 'express';
import { withdraw, deposit, transfer } from '../controllers/walletController';
import { tokenAuthMiddlewear } from '../middlewears/authMiddlewear'

export const walletRouter: Router = Router();

walletRouter.use(tokenAuthMiddlewear)

walletRouter.get('/', );

walletRouter.post(':walletId/withdraw', withdraw);

walletRouter.post(':walletId/deposit', deposit);

walletRouter.post(':walletId/transfer', transfer);
