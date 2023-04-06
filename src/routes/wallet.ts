import { Router } from 'express';
import { withdraw, deposit, transfer, getUserWallets } from '../controllers/walletController';
import { tokenAuthMiddlewear } from '../middlewears/authMiddlewear';
import { walletOwnerMiddlewear } from '../middlewears/walletOwnerMiddlewear';

export const walletRouter: Router = Router();

walletRouter.use(tokenAuthMiddlewear)

walletRouter.get('/', getUserWallets);

walletRouter.post('/:walletId/withdraw', walletOwnerMiddlewear, withdraw);

walletRouter.post('/:walletId/deposit', walletOwnerMiddlewear, deposit);

walletRouter.post('/:walletId/transfer', walletOwnerMiddlewear, transfer);
