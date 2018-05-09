const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('CRUD Items', () => {
  it('Should add single item to /api/add', function(done) {
    chai
      .request(app)
      .post('/api/add')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({
        name: 'nama barang',
        description: 'ini description',
        color: 'ini color',
        price: '4000'
      })
      .end(function(err, res) {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('message', 'data masuk');
        done();
      });
  });

  it('Should list all items /api/article', function(done) {
    chai
      .request(app)
      .get('/api/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
