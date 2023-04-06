import { Request, Response } from "express";
import { AuthRequest } from "../models/custom";
import { Wallet } from "../models/interfaces";
import { depositIntoWallet, transferToWallet, userWallets, withdrawFromWallet } from "../services/dbService";
import { errorObject, successObject } from "../utils/helpers";

export function withdraw(req: Request, res: Response): void {
  const amount = req.body.amount;
  const walletId = req.params.walletId as unknown as number;
  withdrawFromWallet(
    walletId,
    amount,
    () => { res.status(200).json(successObject('Successfully Withdraw.', { amount: amount })) },
    (err: any) => { res.status(400).json( errorObject('Error while withdraw.', err.message )) }
  )
}

export function deposit(req: Request, res: Response): void {
  const amount : number = req.body.amount;
  const walletId: number = req.params.walletId as unknown as number;
  depositIntoWallet(
    walletId,
    amount,
    () => { res.status(200).json(successObject('Successfully deposited.', { amount: amount.toString() })) },
    (err: any) => { res.status(400).json(errorObject('Error while depositing.',err.message )) }
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
    () => { res.status(200).json(successObject('Successfully Transfered.', { amount: amount })) },
    (err: any) => { res.status(400).json(errorObject('Error while transferring.', err.message)) }
  )
}

export function getUserWallets(req: Request, res: Response): void {
  const userId: number = (req as AuthRequest).userId || 0;
  userWallets(userId).then((result: Wallet[]) => {
    res.status(200).json(successObject('user wallets.',
       { wallets: result.map((wallet: Wallet) => ({ id: wallet.id, currency: wallet.currency })) }
    ))
  })
}

