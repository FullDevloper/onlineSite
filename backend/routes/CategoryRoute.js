const express =require("express");
const {createCategory,getCategory,getCategoryId} =require("../controller/CategoryController");
const router=express.Router();
router.route("/newcategory").post(createCategory)
router.route("/categories").get(getCategory);
router.route("/:categoryId/learn").get(getCategoryId)
module.exports=router;