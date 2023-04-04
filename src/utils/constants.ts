import * as dotenv from "dotenv";
dotenv.config();


export const NGN: string = "NGN";
export const CURRENCIES: string[] = [NGN];
export const USER_TABLE: string = "users";
export const WALLET_TABLE: string = "wallets";
export const WALLET_TRANSACTION_TABLE = "wallet_transactions";

export const DEPOSIT: string = "Deposit";
export const TRANSFER: string = "Transfer";
export const WITHDRAW: string = "Withdraw";

export const TRANSACTION_TYPES: string [] = [DEPOSIT, TRANSFER, WITHDRAW];
export const DATABASE_USER: string = process.env.DATABASE_USER!;
export const DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD!;
export const DATABASE_NAME : string = process.env.DATABASE_NAME!;
export const DATABASE_HOST : string = process.env.DATABASE_HOST!;
export const APP_SECRET : string = process.env.APP_SECRET!;



