import { Knex } from "knex/types";
import { User, Wallet, WalletTransaction } from "../models/interfaces";
import { NGN, DEPOSIT, WITHDRAW, TRANSFER, USER_TABLE, WALLET_TABLE, WALLET_TRANSACTION_TABLE } from "../utils/constants";

const knex: Knex<any, unknown[]> = require('../configs/db/knex');

function createNewUser(user: User) {
  return knex<User>(USER_TABLE).insert(user);
}

function addUserWallet(userId: number) {
  const wallet: Partial<Wallet> = { user_id: userId, currency: NGN };
  return knex<Wallet>(WALLET_TABLE).insert(wallet);
}

function addWalletTransaction(tranx: Partial<WalletTransaction>) {
  return knex<WalletTransaction>(WALLET_TRANSACTION_TABLE).insert(tranx);
}

function decrementWalletAmount(walletId: number, amount: number) {
  return knex<Wallet>(WALLET_TABLE).where('id', '=', walletId).decrement('balance', amount);
}

function incrementWalletAmount(walletId: number, amount: number) {
  return knex<Wallet>(WALLET_TABLE).where('id', '=', walletId).increment('balance', amount);
}

export function isUserWalletOwner(userId: number, walletId: number) {
  return knex<Wallet>(WALLET_TABLE).whereExists(
    knex.select('*').from(WALLET_TABLE).whereRaw(`user_id = ${userId} && id = ${walletId}`)
  );
}

export function userWallets(userId: number) {
  return knex<Wallet>(WALLET_TABLE).where('user_id', userId)
}

export function getUserByEmail(email: string) {
  return knex<User>(USER_TABLE).where('email', email).first()
}

export function registerNewUser(user: User, cb: ()=> void, errCb: (err: any) => void) {
  knex.transaction((trx: Knex.Transaction<any, any[]>) =>{
    createNewUser(user).transacting(trx).then((ids: number[]) => {
      return addUserWallet(ids[0]).transacting(trx);
    }).then(trx.commit)
    .catch(trx.rollback);
  }).then((_: unknown) => {
    cb();
  }).catch((err: any) => {
    errCb(err);
  });
}

export function depositIntoWallet(walletId: number, amount: number, cb: ()=> void, errCb: (err: any) => void) {
  knex.transaction((trx: Knex.Transaction<any, any[]>) => {
    incrementWalletAmount(walletId, amount).transacting(trx).then((val: number) => {
      return addWalletTransaction({ wallet_id: walletId, transaction_type: DEPOSIT, amount: amount, currency: NGN }).transacting(trx);
    }).then(trx.commit)
    .catch(trx.rollback);
  }).then((_: unknown) => {
    cb();
  }).catch((err: any) => {
    errCb(err);
  });
}

export function withdrawFromWallet(walletId: number, amount: number, cb: ()=> void, errCb: (err: any) => void) {
  knex.transaction((trx: Knex.Transaction<any, any[]>) => {
    decrementWalletAmount(walletId, amount).transacting(trx).then((val: number) => {
      return addWalletTransaction({ wallet_id: walletId, transaction_type: WITHDRAW, amount: amount, currency: NGN }).transacting(trx);
    }).then(trx.commit)
    .catch(trx.rollback);
  }).then((_: unknown) => {
    cb();
  }).catch((err: any) => {
    errCb(err);
  });
}

export function transferToWallet(walletId: number, amount: number, reciepientWalletId: number, cb: ()=> void, errCb: (err: any) => void) {
  knex.transaction((trx: Knex.Transaction<any, any[]>) => {
    decrementWalletAmount(walletId, amount).transacting(trx).then((val: number) => {
      return incrementWalletAmount(reciepientWalletId, amount).transacting(trx).then((val: number) => {
        return addWalletTransaction({ wallet_id: walletId, transaction_type: TRANSFER, amount: amount, currency: NGN, recipient_wallet_id: reciepientWalletId }).transacting(trx);
      })
    }).then(trx.commit)
    .catch(trx.rollback);
  }).then((_: unknown) => {
    cb();
  }).catch((err: any) => {
    errCb(err);
  });
}
