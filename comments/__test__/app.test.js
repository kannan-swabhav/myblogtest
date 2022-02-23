const app = require('../app')
const request= require('supertest')

it('returns a 201 on successful comments',
async ()=>{
 return await request(app)
        .post('/event-bus/events/handler')
        .send({
            type:"comment created"
        }).expect(200);
 });
