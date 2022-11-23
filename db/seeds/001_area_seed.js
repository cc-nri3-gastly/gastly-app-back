/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('area').del();
    // await knex.raw("SELECT SETVAL ('area_id_seq', 1, false)");
    await knex('area').insert([
        { name: '大手町' },
        { name: 'みなとみらい' },
        { name: '木場' },
    ]);
};
