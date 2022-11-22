/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('review', function (table) {
        table.increments('id').primary();
        table.integer('shop_id').notNullable().references('id').inTable('shop');
        table.integer('rating');
        table.string('comment');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('review');
};
