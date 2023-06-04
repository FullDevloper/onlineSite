const Video =require("../model/Video/Video");

const MyError =require("../utils/MyError");
const asyncHandler =require("express-async-handler");

exports.createVideo=asyncHandler(async(req,res,next)=>{
    const video =await Video.create({...req.body});
    res.status(200).json({data:video,success:true});
})
exports.getVideo =asyncHandler(async(req,res,next)=>{
    // const {learnid}=req.params.id;
    // console.log(learnid,"video")
    // if(!learnid)
    // {
    //     throw new MyError("Уучлаарай хичээлийн код байхгүй байна.")
    // }
    const videos =await  Video.find({LearnCode:req.params.id})
    res.status(200).json({data:videos,success:true}); 
});
exports.getVideos=asyncHandler(async(req,res,next)=>{
    const videos =await  Video.find()
    res.status(200).json({data:videos,success:true}); 
})