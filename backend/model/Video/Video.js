const mongoose =require("mongoose")
const VideSchema =new mongoose.Schema({
    VideoCode:{type:String},
    VideoPath:{type:String},
    LearnCode:{type:mongoose.Schema.Types.ObjectId,ref:"Learn"},
})
module.exports=mongoose.model("Video",VideSchema);