const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    uname:String,
    email:String
})

module.exports=mongoose.model("User",userSchema);