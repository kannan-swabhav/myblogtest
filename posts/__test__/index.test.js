const app = require('../app')
const request= require('supertest')

it('returns a 201 on successful post',
async ()=>{
 return request(app)
        .post('/posts/create')
        .send({
            title:"hello post"
        }).expect(201);
 });
