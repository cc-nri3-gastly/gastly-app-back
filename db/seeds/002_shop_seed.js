/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('shop').del();
    await knex('shop').insert([
        {
            name: 'イタリアン食堂酒場 大手町厨房 ',
            area_id: 1,
            purpose_id: 1,
            url: 'https://tabelog.com/tokyo/A1302/A130201/13036300/',
            small_party: true,
            medium_party: true,
            large_party: true,
            tags: '{"イタリアン","ワイン","個室あり"}',
        },
        {
            name: '本家あべや 東京駅 北町酒場店',
            area_id: 1,
            purpose_id: 1,
            url: 'https://tabelog.com/tokyo/A1302/A130201/13167089/',
            small_party: true,
            medium_party: true,
            large_party: true,
            tags: '{"焼き鳥","日本酒","貸切可能"}',
        },
        {
            name: '七代目 卯兵衛 北町ダイニング ',
            area_id: 1,
            purpose_id: 1,
            url: 'https://tabelog.com/tokyo/A1302/A130201/13167092/',
            small_party: true,
            medium_party: true,
            large_party: true,
            tags: '{"海鮮","日本酒"}',
        },
        {
            name: 'サムギョプサルと野菜　いふう 丸の内店',
            area_id: 1,
            purpose_id: 1,
            url: 'https://tabelog.com/tokyo/A1302/A130201/13031409/',
            small_party: true,
            medium_party: true,
            large_party: true,
            tags: '{"韓国","個室あり","きれい目"}',
        },
        {
            name: '北海道 炉端 えぞ羅',
            area_id: 1,
            purpose_id: 1,
            url: 'https://tabelog.com/tokyo/A1302/A130201/13260659/',
            small_party: true,
            medium_party: true,
            large_party: false,
            tags: '{"魚介料理・海鮮料理","居酒屋","日本酒バー","掘りごたつ","テラス","個室あり"}',
        },
        {
            name: '上海料理佳樹園',
            area_id: 1,
            purpose_id: 1,
            url: 'https://tabelog.com/tokyo/A1302/A130201/13095593/',
            small_party: true,
            medium_party: true,
            large_party: true,
            tags: '{"中華","きれい目","激辛"}',
        },
    ]);
};
