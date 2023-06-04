const mongoose =require("mongoose");
const CategorySchema=new mongoose.Schema({
    CategryName:{type:String},
    CategoryDesc:{type:String}
});
module.exports=mongoose.model("Category",CategorySchema);