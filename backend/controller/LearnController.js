const Learn =require("../model/Learn/Learn");
const asyncHandler =require("express-async-handler");
const Video = require("../model/Video/Video");
exports.createLearn=asyncHandler(async(req,res,next)=>{
    const newLearn =await Learn.create({...req.body});
    res.status(200).json({data:newLearn});
})
exports.getsLearn=asyncHandler(async(req,res,next)=>{
    const learns=await Learn.find();
    res.status(200).json({data:learns});
})
exports.getLearn=asyncHandler(async(req,res,next)=>{
    console.log(req.params.id)
    const learns =await Learn.findById(req.params.id);
    res.status(200).json({data:learns});
})
exports.getUserLearn=asyncHandler(async(req,res,next)=>{
    
    const userLearn=await Learn.find({ Category:req.params.id});
    res.status(200).json({data:userLearn,success:true});
})
exports.getVideos=asyncHandler(async(req,res,next)=>{
   const videos =await Video.find({LearnCode:req.params.id}).populate("LearnCode","LearnName LearnDescription")
   res.status(200).json({data:videos});

})
exports.getLearnTanhim=asyncHandler(async(req,res,next)=>{
    const learns=await Learn.find({LearnStatus:"Tanhim"});
    res.status(200).json({data:learns});
})