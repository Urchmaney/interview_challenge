import { Knex } from "knex";
import { NGN } from "../../../utils/constants";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('wallets', (table) => {
    table.increments();
    table.integer('user_id').unsigned().unique().references('users.id').notNullable();
    table.enu('currency', [NGN]).notNullable();
    table.double('balance').defaultTo(0).unsigned().notNullable();
    table.unique(['user_id', 'currency']);
  })

}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('wallets');
}

