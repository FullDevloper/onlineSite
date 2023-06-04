const User =require("../model/User/User");
const bcrypt =require("bcryptjs");
const MyError =require("../utils/MyError");
const jwt =require("jsonwebtoken");
const asyncHandler =require("express-async-handler");
const Learn = require("../model/Learn/Learn");
exports.createUser=asyncHandler(async(req,res,next)=>{
    const {phoneNumber,password}=req.body;
    console.log(password)
    const auth=await User.findOne({phoneNumber:phoneNumber})
    if(auth)
    {
     throw new MyError("Уучлаарай та бүртгэлтэй байна.")
    }
    const encryptedpassword=await bcrypt.hash(password,10);

    const user =await User.create({...req.body,password:encryptedpassword});
    const token =jwt.sign({
        userId:user._id,
        
    },process.env.TOKEN_KEY,{
        expiresIn:"24h"
    });

    res.status(200).json({success:true,data:user,token:token});
})

exports.getusers=asyncHandler(async(req,res,next)=>
{
    const users=await User.find({role:"user"});
    res.status(200).json({data:users,success:"true"})
})
exports.login=asyncHandler(async(req,res,next)=>{
    const {phoneNumber,password}=req.body;
    const checkUser =await User.findOne({phoneNumber:phoneNumber});
    if(!checkUser)
    {
        throw new MyError("Уучлаарай та мэйл хаягаа зөв оруулна уу?",302)

    }
    const checkpass =await bcrypt.compare(password,checkUser.password)
    if(!checkpass)
    {
        throw new MyError("Уучлаарай нууц үг буруу байна.",500)
    }
    const token =jwt.sign({
        userId:checkUser._id,
      
        userMail:checkUser.email
      
    },process.env.TOKEN_KEY,{
        expiresIn:"24h"
    })
    res.status(200).json({success:true,token,data:checkUser})
})
exports.newLearn=asyncHandler(async(req,res,next)=>{
    const checkuser=await User.findById(req.params.id);
if(!checkuser)
{
    throw new MyError("Уучлаарай бүртгэлгүй байна.");

}
const learnCheck= await User.find({_id:req.params.id,learnId:req.body.learnId})
// console.log(learnCheck)
if(!learnCheck)
{
    throw new MyError("Уучлаарай энэ сургалтыг авсан байна.")
}
const learn =await User.findOneAndUpdate({_id:req.params.id},{
    $addToSet:{
        learnId:req.body.learnId
    }
})


    res.status(200).json({
        success:true,
        data:checkuser,
       
       
    })
})
exports.getLearns=asyncHandler(async(req,res,next)=>{
    const checkuser =await User.findById(req.params.id);
    if(!checkuser)
    {
        throw  new MyError("Сургалт аваагүй байна.")
    }
    const learn = await Learn.find({_id:checkuser.learnId});
    console.log(learn)
    res.status(200).json({data:learn,success:true});

})

exports.getTeacher=asyncHandler(async(req,res,next)=>{
    const teacher =await User.find({role:"teacher"});
    res.status(200).json({data:teacher});
})