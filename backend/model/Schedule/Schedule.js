const mongoose =require("mongoose");
const ScheduleSchema=new mongoose.Schema({
    learnId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Learn"
    },
    TeachId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    stId:{type:mongoose.Schema.Types.ObjectId,
    ref:"User"},
    Garig:{
        type:String
    },
    Start:{
        type:String
    },
    End:{
        type:String
    }

})
module.exports=mongoose.model("Schedule",ScheduleSchema);