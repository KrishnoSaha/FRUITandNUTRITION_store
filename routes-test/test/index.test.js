const app = require('../../app');
const request = require('supertest');

describe('register', () => {
  it('returns bad request if first name is missing', async () => {
    const res = await request(app).post('/register').send({ firstName: 'Jan' });

    expect(res.statusCode).toEqual(201);
  });

  it('returns bad request if first name is missing', async () => {
    const res = await request(app)
      .post('/register')
      .send({ somethingElse: 'Jan' });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual('you need to pass ');
  });
});

describe('order', () => {
    it('returns bad request if first name is missing', async () => {
      const res = await request(app).post('/register').send({ firstName: 'cart' });
  
      expect(res.statusCode).toEqual(201);
    });
  
    it('returns bad request if first name is missing', async () => {
      const res = await request(app)
        .post('/register')
        .send({ somethingElse: 'cart.hbs' });
  
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual('you need to pass a firstName');
    });
  });

  describe('cart', () => {
    it('returns bad request if first name is missing', async () => {
      const res = await request(app).post('/cart').send({ firstName: 'products' });
  
      expect(res.statusCode).toEqual(201);
    });
  
    it('returns bad request if first name is missing', async () => {
      const res = await request(app)
        .post('/register')
        .send({ somethingElse: 'Jan' });
  
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual('uploaded incom');
    });
  });