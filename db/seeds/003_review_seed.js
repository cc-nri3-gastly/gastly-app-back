/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('review').del();
    await knex('review').insert([
        {
            shop_id: 1,
            rating: 4,
            comment: 'おいしかったです。',
        },
        {
            shop_id: 1,
            rating: 4,
            comment: 'ビールの飲み放題があります。',
        },
        {
            shop_id: 2,
            rating: 4,
            comment: '落ち着いた雰囲気でした。',
        },
        {
            shop_id: 2,
            rating: 4,
            comment: '4人の個室があります。',
        },
        {
            shop_id: 2,
            rating: 5,
            comment: '部長も満足でした。',
        },
        {
            shop_id: 3,
            rating: 4,
            comment: '20人の大個室がありました。',
        },
        {
            shop_id: 3,
            rating: 5,
            comment: '料理に合う日本酒を勧めてくれます。',
        },
        {
            shop_id: 4,
            rating: 4,
            comment: 'パスタがおいしいです。',
        },
    ]);
};
