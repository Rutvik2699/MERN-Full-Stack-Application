const express = require("express");
const app = express();
const port = 8000

app.get("/",(req,res)=>{
    return res.send("You are visiting login route")
});

app.listen(port,()=>{
    console.log("Sesrver is up and running...")
});

// app.get('/',(req,res)=>res.send('Hello World!'))

// app.listen(port,()=>console.log(`Example app listening on port ${port}!`))