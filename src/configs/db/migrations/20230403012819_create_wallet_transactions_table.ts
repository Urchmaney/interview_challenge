import { Knex } from "knex";
import { NGN, TRANSACTION_TYPES } from "../../../utils/constants";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('wallet_transactions', (table) => {
    table.increments();
    table.integer('recipient_wallet_id').unsigned().references('wallets.id');
    table.integer('wallet_id').unsigned().references('wallets.id');
    table.enu('currency', [NGN]);
    table.enu('tranx_type', TRANSACTION_TYPES);
    table.double('amount').defaultTo(0).unsigned();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('wallet_transactions');
}

