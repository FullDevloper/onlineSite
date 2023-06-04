const mongoose =require("mongoose");
const UserSchema =new mongoose.Schema({
    Firstname:{type:String,required:true},
    LastName:{type:String,required:true},

    phoneNumber:{type:String},
    // LearnId:[type:""],
    password:{type:String},
    role:{
        type:String,
        enum:["admin","user","teacher"],
        default:"user"
    },
    learnId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Learn"
    }]
    

})
module.exports=mongoose.model("User",UserSchema)