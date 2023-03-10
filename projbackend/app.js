require('dotenv').config()
//var bodyParser = require('body-parser')
//console.log(process.env) // remove this after you've confirmed it is working
const mongoose = require("mongoose");
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const cors= require("cors");
const {check,validationResult}=require('express-validator')

//My Routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")

//DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB Connected")
})

//mongoose.connect("mongodb://127.0.0.1:27017/test",
//{useNewUrlParser:true});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes //Using api to visit backend
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes)

//PORT
const port = process.env.PORT || 8000;


//Starting a Server
app.listen(port,()=>{
    console.log(`App is running ${port}`);
});