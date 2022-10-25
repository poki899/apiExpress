
let { server } = require('../../server');
let chaiHttp = require('chai-http');
let chai = require('chai');
chai.should();

chai.use(chaiHttp);
describe('route', () => {
    it('GET listFiles', (done) => {
        chai.request(server)
            .get('/api/listCsvs')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('files');
                done();
            });
    });

    it('GET detail/:name', (done) => {
        chai.request(server)
            .get('/api/detail/test2.csv')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('GET listCvsWithDetails', (done) => {
        chai.request(server)
            .get('/api/listCvsWithDetails')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('header');
                done();
            });
    });
});