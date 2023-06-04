const mongoose =require("mongoose");
const LearnSchema=new mongoose.Schema({
    LearnName:{type:String},
    LearnTeacher:{type:String},
    LTeachId:{type:mongoose.Schema.Types.ObjectId},
    Category:{type:mongoose.Schema.Types.ObjectId,
    ref:"Category"
    },
    LearnStatus:{type:String,
        enum:["Tanhim","Tsahim"],
        default:"Tsahim"
    },
    LearnOgnoo:{type:String},
    LearnDescription:{type:String},
    LearnImage:{type:String},
    LearnVideo:{type:String}
})
module.exports=mongoose.model("Learn",LearnSchema);