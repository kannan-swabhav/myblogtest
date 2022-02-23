const app = require('../app')
const request= require('supertest')

it('returns a 200 on successful post request',
async ()=>{
 return request(app)
        .get('/posts')
        .expect(200);
 });
