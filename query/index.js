const app = require('./app')
const  axios  = require('axios')
const LOCAL_HOST= "event-bus-srv"

app.listen(4002,async ()=>{
    console.log("listing in port 4002..")
    const resp = await axios.get("http://"+LOCAL_HOST+":4005/events")
                          .catch(e=>console.log(e.message))
    if(resp){
    const events = resp.data; 
     for(let event of events){
          console.log("processing event ",event.type)
          handleEvent(event.type,event.data)
     }
  }
});