import { Request, Response } from "express";
import { AuthRequest } from "../models/custom";
import { Wallet } from "../models/interfaces";
import { depositIntoWallet, transferToWallet, userWallets, withdrawFromWallet } from "../services/dbService";

export function withdraw(req: Request, res: Response): void {
  const amount = req.body.amount;
  const walletId = req.params.walletId as unknown as number;
  withdrawFromWallet(
    walletId,
    amount,
    () => { res.send('Successfully Withdraw.') },
    (err: any) => { res.status(400).send('Error while withdraw.') }
  )
}

export function deposit(req: Request, res: Response): void {
  const amount : number = req.body.amount;
  const walletId: number = req.params.walletId as unknown as number;
  depositIntoWallet(
    walletId,
    amount,
    () => { res.send('Successfully deposited.') },
    (err: any) => { res.status(400).send('Error while depositing.') }
  )
}

export function transfer(req: Request, res: Response): void {
  const amount = req.body.amount;
  const walletId = req.params.walletId as unknown as number;
  const reciepientWalletId = req.body.reciepientWalletId;

  transferToWallet(
    walletId,
    amount,
    reciepientWalletId,
    () => { res.send('Successfully transfered.') },
    (err: any) => { res.status(400).send('Error while transferring.') }
  )
}

export function getUserWallets(req: Request, res: Response): void {
  const userId: number = (req as AuthRequest).userId || 0;
  userWallets(userId).then((result: Wallet[]) => {
    res.send(result.map((wallet: Wallet) => ({ id: wallet.id, currency: wallet.currency })));
  })
}

