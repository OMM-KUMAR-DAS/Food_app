const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        trim:true
    },

    password:{
        type:String,
        required:true
    },

    phone:{
        type:Number,
        required:true
       
    },
   
    role:{
        type:String,
        enum:["Admin","Student"]
    },
    carts:[{type:'ObjectId',ref:'foood'}],

    orderlist:[{type:'ObjectId',ref:'foood'}],

})

module.exports=mongoose.model("user",userSchema)