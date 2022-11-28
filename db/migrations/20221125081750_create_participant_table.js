/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('participant', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('tags', []);
        table.string('allergy');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable('participant');
};
