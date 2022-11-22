var express = require('express');
var router = express.Router();

/* GET users listing. */
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

router.get('/', function (req, res) {
    res.json;
});

router.post('/', function (req, res) {
    res.json;
});

module.exports = router;
