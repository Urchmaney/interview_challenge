import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table: Knex.CreateTableBuilder) => {
    table.increments('id');
    table.string('firstName');
    table.string('lastName');
    table.string('email').unique();
    table.string('password');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}

