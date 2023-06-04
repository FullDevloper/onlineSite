const Schedule =require("../model/Schedule/Schedule");
const asyncHandler=require("express-async-handler");
exports.createSchedlue=asyncHandler(async(req,res,next)=>{
    const newSchedule=await Schedule.create({...req.body});
    res.status(200).json({data:newSchedule});
})
exports.schedules=asyncHandler(async(req,res,next)=>{
    // console.log(object)
    const schedules =await Schedule.find({stId:"6476ab8a97a94c407c32ef4b"}).populate("learnId","LearnName LearnTeacher")
    res.status(200).json({data:schedules});
})
exports.Tschedules=asyncHandler(async(req,res,next)=>{
    // console.log(object)
    const schedules =await Schedule.find({stId:"6476ab8a97a94c407c32ef4b"}).populate("stId learnId","LastName Firstname phoneNumber LearnName ")
    res.status(200).json({data:schedules});
})