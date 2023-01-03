require('dotenv').config()
//console.log(process.env) // remove this after you've confirmed it is working
const mongoose = require("mongoose");
const express = require("express")
const app = express();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB Connected")
})

//mongoose.connect("mongodb://127.0.0.1:27017/test",
//{useNewUrlParser:true});

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`App is running ${port}`);
});