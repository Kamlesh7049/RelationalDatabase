const mongoose=require("mongoose");
const profileSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        unique:true
    },
    fname:String,
    lname:String
});
module.exports=mongoose.model("Profile",profileSchema)