const shopModel = require('../model/shops.model');

module.exports = {
    async index(req, res) {
        try {
            const areaId = parseInt(req.query.areaId);
            const personNum = parseInt(req.query.personNum);
            let smallParty,
                mediumParty,
                largeParty = false;
            if (personNum <= 4) smallParty == true;
            else if (personNum >= 1) mediumParty == true;
            else largeParty == true;

            const shops = await shopModel.selectByAreaIdAndPartySize(
                areaId,
                smallParty,
                mediumParty,
                largeParty
            );
            res.status(200).json(shops);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    },
};
