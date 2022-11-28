/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.alterTable('shop', function (table) {
        //tagsカラムを追加
        table.text('tags', []);
        //目的カラムを追加
        table.integer('purpose_id');
        //平均値カラムを削除
        table.dropColumn('rating_average');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function () {
    //await knex.schema.dropTable('shop');
};
