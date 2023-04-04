import { Request, Response } from "express";
import { AuthRequest } from "../models/custom";
import { depositIntoWallet, transferToWallet, withdrawFromWallet } from "../services/dbService";

const knex = require('../configs/db/knex');

export function withdraw(req: Request, res: Response): void {
  const userId = (req as AuthRequest).user_id!;
  const amount = req.body.amount;
  const walletId = req.body.wallet_id;
  withdrawFromWallet(
    walletId,
    amount,
    () => { res.send('Successfully Withdraw.') },
    (err: any) => { res.status(400).send('Error while withdraw.') }
  )
}

export function deposit(req: Request, res: Response): void {
  const user_id : string = (req as AuthRequest).user_id!;
  const amount : number = req.body.amount;
  const walletId: number = req.body.wallet_id;
  depositIntoWallet(
    walletId,
    amount,
    () => { res.send('Successfully deposited.') },
    (err: any) => { res.status(400).send('Error while depositing.') }
  )
}

export function transfer(req: Request, res: Response): void {
  const userId = (req as AuthRequest).user_id!;
  const amount = req.body.amount;
  const walletId = req.body.wallet_id;
  const reciepientWalletId = req.body.reciepient_wallet_id;

  transferToWallet(
    walletId,
    amount,
    reciepientWalletId,
    () => { res.send('Successfully transfered.') },
    (err: any) => { res.status(400).send('Error while transferring.') }
  )
}

