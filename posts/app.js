const express = require('express')
const bodyParse = require('body-parser')
const uuid = require('uuid')
const app = express()
const cors = require('cors')
const axios = require('axios')

const LOCAL_HOST= "event-bus-srv"
const posts= {}
app.use(bodyParse.json())
app.use(cors())
app.get('/posts/display',(req,resp)=>{

  resp.send(posts)
  
});


app.post('/posts/create',async (req,resp)=>{

  const id = uuid.v4() 
  const {title} = req.body
  posts[id] = {id,title}

  await axios.post("http://"+LOCAL_HOST+":4005/event-bus/events",
   {type:'PostCreated',data:{id,title}})
   .catch(err=>console.log(err.message))

  resp.status(201).send(posts[id])

});


app.post('/event-bus/events/handler',(req,resp)=>{
  const {type} = req.body
  console.log("Received event :",type)
  resp.send({})
})

module.exports= app