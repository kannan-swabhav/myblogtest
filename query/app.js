const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use(cors())


const posts = {}
/*
    1:{
         id :1,
         title:
         comments:[{id:,cotent:}]
    }
*/
app.get('/posts',(req,resp)=>{
      resp.send(posts)

});

const handleEvent = (type,data)=>{
     if(type== "PostCreated"){
          const {id,title}=data;
          posts[id] = {id,title,comments:[]};
  
        }
  
        if(type=="CommentCreated"){
             const {commentId,content,postId} = data;
           //  console.log(data)
             const post = posts[postId];
             post.comments.push({commentId,content})
        }
  
}
app.post("/event-bus/events/handler",(req,resp)=>{

    
      const {type,data} = req.body;
      console.log("received event ",type);
      handleEvent(type,data)
    // console.log(posts)
     resp.status(200).send({})
});

module.exports =app