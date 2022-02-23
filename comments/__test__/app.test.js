const app = require('../app')
const request= require('supertest')

it('returns a 201 on successful comments',
async ()=>{
 return await request(app)
        .post('/posts/123/comments')
        .send({
            content:"hello comment"
        }).expect(201);
 });
