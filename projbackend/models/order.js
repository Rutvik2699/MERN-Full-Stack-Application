const mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema;
const ProductCartSchema = new mongoose.Schema({
    product:{
        //Whenever we bring ObjectId we have to refer it
        type:ObjectId,
        ref:"Product"
    },//What you want to see in the cart
    name:String,
    count:Number,
    price:Number

});

const ProductCart = mongoose.model("ProductCart",ProductCartSchema)


const OrderSchema = new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_id:{},
    amount:{type:Number},
    address:String,
    status:{
        type:String,
        default:"",
        enum:["Cancelled","Delivered","Shipped","Processing","Received"]
    },
    updated:Date,
    user:{
        type:ObjectId,
        ref:"User"
    }
},
{timestamps:true}
);
const Order = mongoose.model("Order",OrderSchema)


module.exports={Order,ProductCart}