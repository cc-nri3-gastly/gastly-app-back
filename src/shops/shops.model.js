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
