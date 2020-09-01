import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('questions', table =>{
        table.increments('id').primary();
        table.string('questionDialog').notNullable();
        table.string('subject').notNullable();
        table.string('fisrtOption').notNullable();
        table.string('secondOption').notNullable();
        table.string('thirdOption').notNullable();
        table.string('fourthOption').notNullable();
        table.string('questionImage');
        table.string('rightAnswer').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('lives');
}