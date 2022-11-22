//require
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../app.js');
chai.should();

//data
const shops_area1 = require('./data/shops_area1.json');
const shops_smallParty = require('./data/shops_smallParty.json');
const shops_area1_largeParty = require('./data/shops_area1_largeParty.json');

//describe
const server = app;
describe('BizakayaAPI -SHOP', () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });

    describe('GET /shops', () => {
        it('should return the list of all shops', async () => {
            const res = await request.get('/shops');
            res.body.should.deep.equal(shops_area1);
        });

        it('should return the list of shops selected by areaId', async () => {
            const res = await request.get('/shops?areaId=1');
            res.body.should.deep.equal(shops_area1);
        });

        it('should return the list of shops selected by smallParty', async () => {
            const res = await request.get('/shops?personNum=4');
            res.body.should.deep.equal(shops_smallParty);
        });

        it('should return the list of shops selected by areaId and largeParty', async () => {
            const res = await request.get('/shops?areaId=1&personNum=13');
            res.body.should.deep.equal(shops_area1_largeParty);
        });
    });
});
