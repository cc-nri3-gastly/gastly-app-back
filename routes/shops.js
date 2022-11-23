var express = require('express');
var router = express.Router();
const shopModel = require('./shops.model');
const reviewModel = require('./reviews.model');

router.get('/test', function (req, res) {
    res.json([
        {
            id: 1,
            name: '居酒屋ABC',
            areaId: 1,
            url: 'http://shops-abc.jp',
            smallParty: true,
            mediumParty: false,
            largeParty: true,
            ratingAverage: 4.1,
            comments: ['おいしかったです。', 'ビールの飲み放題があります。'],
        },
        {
            id: 2,
            name: 'Bar PQR',
            areaId: 1,
            url: 'http://shops-pqr.jp',
            smallParty: true,
            mediumParty: false,
            largeParty: false,
            ratingAverage: 4.4,
            comments: [
                '落ち着いた雰囲気でした。',
                '4人の個室があります。',
                '部長も満足でした。',
            ],
        },
        {
            id: 3,
            name: '創作和食 XYZ',
            areaId: 1,
            url: 'http://shops-xyz.jp',
            smallParty: true,
            mediumParty: true,
            largeParty: false,
            ratingAverage: 4.5,
            comments: [
                '20人の大個室がありました。',
                '料理に合う日本酒を勧めてくれます。',
            ],
        },
    ]);
});

router.get('/', async function (req, res) {
    try {
        const areaId = parseInt(req.query.areaId);
        const personNum = parseInt(req.query.personNum);
        let partySize;
        if (personNum <= 4) partySize = 'small_party';
        else if (personNum <= 10) partySize = 'medium_party';
        else partySize = 'large_party';
        console.log(partySize);

        const shops = await shopModel.selectByAreaIdAndPartySize(
            areaId,
            partySize
        );

        //TODO mapでぐるぐるして詰め直す
        const shopIds = shops.map((shop) => shop.id);
        const procs = shopIds.map((shopId) =>
            reviewModel.selectByShopId(shopId)
        );
        const reviewsOfShops = await Promise.all(procs);
        reviewsOfShops.map((reviews, i) => {
            shops[i].comments = reviews.map((r) => r.comment);
        });

        res.status(200).json(shops);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

module.exports = router;
