
//Name the object exactly as the models which is exported
const { validationResult } = require("express-validator");
const User = require("../models/user")
//Name the controller same as Route
exports.signup = (req,res)=>{
 
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
 
 
    //Creating an object
   const user = new User(req.body)
   user.save((err,user)=>{
    if(err){
        console.log(err);
        return res.status(400).json({
            err:"not able to save user in DB"
            
        });
    }
    res.json({
        name:user.name,
        email:user.email,
        _id:user._id
    });
   })
 };


exports.signout = (req,res)=>{
    //res.send("user signout success")
 
    //Sending JSON response
     res.json({
         message:"User Signout"
     });
 };


