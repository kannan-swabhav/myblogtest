const app = require('./app')

app.listen(4000,()=>{
    console.log("hello..",new Date().toUTCString())
    console.log("listening on 4000")
})