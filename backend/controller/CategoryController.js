const Category =require("../model/Category/Category");
const Learn =require("../model/Learn/Learn");
const MyError =require("../utils/MyError");
const asyncHandler =require("express-async-handler");
exports.createCategory=asyncHandler(async(req,res,next)=>{
    // console.log("object")
    const {CategryName}=req.body;
    const category =await Category.find({CategryName:CategryName});
    // if(category){
    //    throw new  MyError("Уучлаарай ийм нэртэй категори үүссэн байна.")
    // }
    console.log(category);
    const cat= await Category.create({...req.body})
    res.status(200).json({data:cat,success:true});
});
exports.getCategory=asyncHandler(async(req,res,next)=>{
    const categories =await Category.find();
    res.status(200).json({success:true,data:categories});
});
exports.getCategoryId=asyncHandler(async(req,res,next)=>{

    const categoryLearn =await Learn.find({Category:req.params.categoryId});
console.log(categoryLearn,"Learn")
    res.status(200).json({data:categoryLearn,success:true});

})