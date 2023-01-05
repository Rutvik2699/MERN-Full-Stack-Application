const express = require('express')
//const router = express()
const router = express.Router()
const {check,validationResult}=require('express-validator')
const {signout,signup} = require("../controllers/auth")


//Using express router
router.post("/signup",[
    check("name","name should be atleast 3 letters").isLength({min:3}),
    check("email","email is required").isEmail(),
    check("password","password should be atleast 3 char").isLength({min:3}),
],signup)
router.get("/signout",signout)


module.exports = router;
