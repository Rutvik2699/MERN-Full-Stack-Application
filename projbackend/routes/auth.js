const express = require('express')
//const router = express()
const router = express.Router()
const {check,validationResult}=require('express-validator')
const {signout,signup,signin,isSignedIn} = require("../controllers/auth")


//Using express router
router.post("/signup",[
    check("name","name should be atleast 3 letters").isLength({min:3}),
    check("email","email is required").isEmail(),
    check("password","password should be atleast 3 char").isLength({min:5}),
],signup
)

router.post("/signin",[
    check("email","email is required").isEmail(),
    check("password","password field is required").isLength({min:5}),
],signin
)


router.get("/signout",signout);

router.get("/testroute",isSignedIn,(req,res)=>{
   // res.send("a protected route");
    res.json(req.auth);
});


module.exports = router;
