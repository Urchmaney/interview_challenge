const dotenv = require("dotenv");
const r = dotenv.config();

export const NGN = "NGN";
export const CURRENCIES: string[] = [NGN];
export const USER_TABLE = "users";
export const WALLET_TABLE = "wallets";
export const WALLET_TRANSACTION_TABLE = "wallet_transactions";

export const DEPOSIT = "Deposit";
export const TRANSFER = "Transfer";
export const WITHDRAW = "Withdraw";

export const TRANSACTION_TYPES: string[] = [DEPOSIT, TRANSFER, WITHDRAW];

export const APP_SECRET: (string | undefined) = process.env.APP_SECRET;



