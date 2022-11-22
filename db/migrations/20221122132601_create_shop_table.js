/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('shop', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('area_id').notNullable().references('id').inTable('area');
        table.string('url');
        table.boolean('small_party').notNullable();
        table.boolean('medium_party').notNullable();
        table.boolean('large_party').notNullable();
        table.float('rating_average');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('shop');
};
