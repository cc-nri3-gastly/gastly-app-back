//require
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../src/app.js');
chai.should();

//data
const shops_area1_largeParty = require('./data/shops_area1_largeParty.json');
const shops_area1_smallParty = require('./data/shops_area1_smallParty.json');

//describe
const server = app;
describe('BizakayaAPI -SHOP', () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });

    describe('GET /shops', () => {
        it('should return the list of shops selected by areaId and largeParty', async () => {
            const res = await request.get('/shops?areaId=1&personNum=13');
            res.body.should.deep.equal(shops_area1_largeParty);
        });
        it('should return the list of shops selected by areaId and smallParty', async () => {
            const res = await request.get('/shops?areaId=1&personNum=4');
            res.body.should.deep.equal(shops_area1_smallParty);
        });
    });
});
