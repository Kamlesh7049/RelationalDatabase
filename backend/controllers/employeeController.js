const UserModel=require("../models/userModel");
const ProfileModel=require("../models/profileModel")

const userSave=async(req,res)=>{
    const {uname,email,fname,lname}=req.body;
    console.log(uname,email,fname,lname)
    const UserData=await UserModel.create({
        uname:uname,
        email:email
    })
    console.log(UserData);
    const ProfileData=await ProfileModel.create({
        userid:UserData._id,
        fname:fname,
        lname:lname

    })
    console.log(ProfileData)
    res.send("Data succefully Save!!!")

}
const userDataDisplay=async(req,res)=>{
    const Data=await ProfileModel.find().populate("userid");
    res.send(Data);
}


module.exports={
    userSave,
    userDataDisplay
}