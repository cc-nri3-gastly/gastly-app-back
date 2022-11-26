/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('participant').del();
    await knex('participant').insert([
        { id: 1, name: '鈴木部長', tags: '{"ビール"}' },
        { id: 2, name: '田中GM', tags: '{"喫煙可"}' },
        { id: 3, name: '森山エキスパート' },
        { id: 4, name: '山下エキスパート' },
        { id: 5, name: '村田エキスパート' },
        { id: 6, name: '長嶋エキスパート' },
        { id: 7, name: '合田', tags: '{"肉"}' },
        { id: 8, name: '骨川', tags: '{"きれい目"}' },
        { id: 9, name: '野比', tags: '{"居酒屋","個室あり"}' },
        { id: 10, name: '源' },
    ]);
};
