import { NextFunction, Request, Response } from "express";
import { AuthRequest } from '../models/custom';
import { Wallet } from "../models/interfaces";
import { isUserWalletOwner } from '../services/dbService';

export function walletOwnerMiddlewear (req: Request, res: Response, next: NextFunction) : void {
  const userId: number = (req as AuthRequest).userId || 0;
  const walletId: number = req.params.walletId as unknown as number;
  isUserWalletOwner(userId,  walletId).then((result: Wallet[]) => {
    if (result.length <= 0) {
      res.status(401).send("Unauthorized Request");
      return;
    }
    
    next();
  })
}
