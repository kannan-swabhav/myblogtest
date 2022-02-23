const app = require('./app')

app.listen(4000,()=>{
    console.log("hello..dev2",new Date().toUTCString())
    console.log("listening on 4000")
})