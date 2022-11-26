//require
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../src/app.js');
chai.should();

//data
//const shops_area1_largeParty = require('./data/shops_area1_largeParty.json');
//const shops_area1_smallParty = require('./data/shops_area1_smallParty.json');
const shops_post_01 = require('./data/shops_post_01.json');

//describe
const server = app;
describe('BizakayaAPI -SHOP', () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });

    /*
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
    */

    describe('POST /shops', () => {
        it('return shops from post', async () => {
            const reqBody = {
                areaId: '1',
                purposeId: '1',
                personNum: '1',
                participantIds: [7, 8, 9],
            };

            const res = await request.post('/shops').send(reqBody);
            console.log(res.body);
            res.body.should.deep.equal(shops_post_01);
        });
    });
});
