/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('participant').del();
    await knex('participant').insert([
        { name: '鈴木部長', tags: '{"ビール"}', allergy: 'えび' },
        { name: '田中GM', tags: '{"喫煙可"}', allergy: '魚卵' },
        {
            name: '森山エキスパート',
            tags: '{"ワイン"}',
            allergy: 'そば',
        },
        { name: '山下エキスパート', allergy: '酒' },
        { name: '村田エキスパート', allergy: '小麦' },
        { name: '長嶋エキスパート', allergy: 'かに' },
        { name: '合田', tags: '{"和食"}', allergy: 'パン' },
        { name: '骨川', tags: '{"中華"}', allergy: null },
        { name: '野比', tags: '{"個室あり"}', allergy: null },
        { name: '源', allergy: null },
    ]);
};
