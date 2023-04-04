export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Wallet {
  id: number;
  currency: string;
  balance: number;
  user_id: number;
}

export interface WalletTransaction {
  id: number;
  wallet_id: number;
  amount: number;
  recipient_wallet_id: number;
  transaction_type: string;
  currency: string;
}