var express = require('express');
var router = express.Router();
const shopModel = require('./shops.model');
const reviewModel = require('../reviews/reviews.model');
const participantsModel = require('../participants/participants.model');

const { parse } = require('postgres-array');

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

router.post('/', async function (req, res) {
    try {
        console.log(req.body);
        //const areaId = parseInt(req.body.areaId);
        //const purposeId = parseInt(req.body.purposeId);
        //const personNum = parseInt(req.body.personNum);
        const areaId = req.body.areaId;
        const purposeId = req.body.purposeId;
        const personNum = req.body.personNum;

        console.log(areaId);
        console.log(purposeId);
        console.log(personNum);

        let participantIds = [];
        if (req.body.participantIds != undefined) {
            participantIds = req.body.participantIds;
        }
        // 会場サイズを算出
        let partySize;
        if (personNum <= 10) {
            partySize = 'small_party';
        } else if (personNum <= 20) {
            partySize = 'medium_party';
        } else {
            partySize = 'large_party';
        }

        console.log(`partySize = ${partySize}`);

        // 参加者情報からタグ情報を文字列として一覧化
        const participants = await participantsModel.selectByIds(
            participantIds
        );
        let participantTags = '';
        participants.forEach((obj) => {
            parse(obj['tags'], (value) => value).forEach(
                (v) => (participantTags += `'${v}',`)
            );
        });
        participantTags = participantTags.slice(0, -1);

        console.log(participantTags);

        // 検索条件に一致した店を検索
        const shops = await shopModel.selectByAreaIdAndPurposeIdAndPartySize(
            areaId,
            purposeId,
            partySize,
            participantTags
        );

        for (let shop of shops) {
            //ratingAverage,comments を追加
            await reviewModel.selectByShopId(shop['shopId']).then((reviews) => {
                shop['rationgAverage'] =
                    reviews.reduce((prev, cur) => {
                        return prev + cur['rating'];
                    }, 0) / reviews.length;
                console.log(shop['rationgAverage']);

                shop['comments'] = reviews.map((obj) => {
                    return obj['comment'];
                });
            });

            //matchedTagsを追加
            const tagsArray = participantTags.replace(/'/g, '').split(',');
            shop['matchedTags'] = parse(shop['tags']).filter((v) => {
                return tagsArray.includes(v);
            });
        }

        //matchedTags配列の要素の長さを比較して、1番多いものを選定する

        let returnShops = [];
        const maxTagsShop = shops.reduce(
            (prev, cur) =>
                prev['matchedTags'].length > cur['matchedTags'].length
                    ? prev
                    : cur,
            shops[0]
        );

        returnShops.push(maxTagsShop);

        //shopsからmaxTagsShopを取り除く
        shops.splice(shops.indexOf(maxTagsShop), 1);

        //shopsから2件をランダムに抽出する
        //変数を宣言しておく
        let m;
        let n;
        //２つが同じじゃなくなるまで繰り返せ
        while (m == n) {
            m = Math.ceil(Math.random() * shops.length - 1);
            n = Math.ceil(Math.random() * shops.length - 1);
        }
        returnShops.push(shops[m]);
        returnShops.push(shops[n]);

        console.log('=====結果！！！！！！！！！！======');
        console.log(returnShops);
        res.status(200).json(returnShops);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
});

module.exports = router;
