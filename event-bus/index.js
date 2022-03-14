const express = require('express')
const bodyParser = require('body-parser')
const axios  = require('axios')

const app = express()
app.use(bodyParser.json())

const events =[]

app.post('/event-bus/events',(req,resp)=>{
    const event = req.body
    events.push(event)
    axios.post("http://posts-clusterip-srv:4000/event-bus/events/handler",event)
    .catch(e=>console.log(e.message))
    axios.post("http://comments-srv:4001/event-bus/events/handler",event)
    .catch(e=>console.log(e.message))
    axios.post("http://query-srv:4002/event-bus/events/handler",event)
    .catch(e=>console.log(e.message))

    resp.send({})
});

app.get('/events',(req,resp)=>{
   resp.send(events);
});

app.listen(4005,()=>{
    console.log("listening on 4005.")
})