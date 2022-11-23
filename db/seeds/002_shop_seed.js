/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('shop').del();
    await knex('shop').insert([
        {
            name: '居酒屋ABC',
            area_id: 1,
            url: 'http://shops-abc.jp',
            small_party: true,
            medium_party: false,
            large_party: true,
            rating_average: 4.0,
        },
        {
            name: 'Bar PQR',
            area_id: 1,
            url: 'http://shops-pqr.jp',
            small_party: true,
            medium_party: false,
            large_party: false,
            rating_average: 4.3,
        },
        {
            name: '創作和食 XYZ',
            area_id: 1,
            url: 'http://shops-xyz.jp',
            small_party: true,
            medium_party: true,
            large_party: false,
            rating_average: 4.5,
        },
        {
            name: 'イタリアンレストランMM',
            area_id: 2,
            url: 'http://shops-mmm.jp',
            small_party: false,
            medium_party: true,
            large_party: false,
            rating_average: 4.0,
        },
    ]);
};
