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
            comment: 'ワインの飲み放題があります。',
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
        {
            shop_id: 5,
            rating: 4,
            comment: '特にお刺身がおすすめ。',
        },
        {
            shop_id: 5,
            rating: 5,
            comment: '海鮮丼が美味しい！出しが効いてる',
        },
        {
            shop_id: 6,
            rating: 4,
            comment: 'コスパが良い。',
        },
        {
            shop_id: 6,
            rating: 3,
            comment: 'お昼の定食のほうが美味しいかも',
        },
    ]);
};
