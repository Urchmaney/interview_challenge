import { Knex } from "knex";
import { NGN } from "../../../utils/constants";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('wallets', (table) => {
    table.increments();
    table.integer('user_id').unsigned().unique().references('users.id');
    table.enu('currency', [NGN]);
    table.double('balance').defaultTo(0).unsigned();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('wallets');
}

