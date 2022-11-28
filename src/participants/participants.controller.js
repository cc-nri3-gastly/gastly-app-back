var express = require('express');
var router = express.Router();
const participantsModel = require('../participants/participants.model');

router.get('/', async function (req, res) {
    try {
        const result = await participantsModel.selectAll();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

router.post('/', async function (req, res) {
    try {
        console.log(req.body);

        const participant = {
            name: req.body.name,
            tags: req.body.tags,
            allergy: req.body.allergy,
        };

        const result = await participantsModel.insert(participant);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

module.exports = router;
