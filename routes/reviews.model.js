const knex = require('../knex.js');
const REVIEW_TABLE = 'review';

module.exports = {
    REVIEW_TABLE,

    selectByShopId(shopId) {
        return (
            knex
                .select({
                    id: 'review.id',
                    shopId: 'review.shop_id',
                    rating: 'review.rating',
                    comment: 'review.comment',
                })
                .from(REVIEW_TABLE)
                .where({ shop_id: shopId })
                //TODO ↓はテスト用なので終わったら削除
                .then((res) => {
                    console.log(res);
                    return res;
                })
            //↑ここまで
        );
    },
};
