//require
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../src/app.js');
const expect = chai.expect;
chai.should();

const config = require('../knexfile');
const knex = require('knex')(config);

//data
//const shops_area1_largeParty = require('./data/shops_area1_largeParty.json');
//const shops_area1_smallParty = require('./data/shops_area1_smallParty.json');
//const shops_post_01 = require('./data/shops_post_01.json');

//describe
const server = app;
describe('BizakayaAPI -SHOP', () => {
    let request;
    beforeEach(async () => {
        await knex.migrate.rollback();
        await knex.migrate.latest();
        await knex.seed.run();
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
        it('return 3 shops from post', async () => {
            const reqBody = {
                areaId: '1',
                purposeId: '1',
                personNum: '3',
                participantIds: [],
            };

            const res = await request.post('/shops').send(reqBody);
            console.log('=====response body=========');
            console.log(res.body);
            console.log('=====response body=========');
            expect(res.body.length).to.equal(3);
            //res.body.should.deep.equal(shops_post_01);
        });
    });

    describe('GET /participants', () => {
        it('return all participants', async () => {
            const res = await request.get('/participants');
            console.log('=====response body=========');
            console.log(res.body);
            console.log('=====response body=========');
            expect(res.body.length).to.equal(10);
        });

        it('return 1 participant insert to db', async () => {
            const reqBody = {
                name: '野村　太郎',
                tags: '{"和食","個室あり"}',
                allergy: 'かに',
            };
            const res = await request.post('/participants').send(reqBody);
            console.log('=====response body=========');
            console.log(res.body);
            console.log('=====response body=========');
            expect(res.body.rowCount).to.equal(1);
        });
    });
});
