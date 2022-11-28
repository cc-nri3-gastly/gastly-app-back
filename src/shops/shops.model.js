const knex = require('../../knex.js');
const SHOP_TABLE = 'shop';

module.exports = {
    SHOP_TABLE,
    selectByAreaIdAndPartySize(areaId, partySize) {
        return knex
            .select({
                id: 'id',
                name: 'name',
                areaId: 'area_id',
                url: 'url',
                smallParty: 'small_party',
                mediumParty: 'medium_party',
                largeParty: 'large_party',
                ratingAverage: 'rating_average',
            })
            .from(SHOP_TABLE)
            .where({
                area_id: areaId,
            })
            .whereRaw(`${partySize}=true`);
    },

    selectByAreaIdAndPurposeIdAndPartySize(areaId, purposeId, partySize, tags) {
        let query = knex
            .select({
                shopId: 'id',
                shopName: 'name',
                areaId: 'area_id',
                url: 'url',
                tags: 'tags',
            })
            .from(SHOP_TABLE)
            .where({
                area_id: areaId,
                purpose_id: purposeId,
            })
            .whereRaw(`${partySize}=true`);

        if (Array.isArray(tags) && tags.length > 0) {
            query.whereRaw(`tags ~ Any(array[${tags}])`);
        }
        return query;
    },

    // create(shop) {
    //     return knex('shop').insert(shop);
    // },

    // update(id, shop) {
    //     return knex(SHOP_TABLE).where({ id: id }).update(shop);
    // },

    // delete(id) {
    //     return knex(SHOP_TABLE).where({ id: id }).delete();
    // },
};
