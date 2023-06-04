const express =require("express");
const router =express.Router();
const {createUser,login,newLearn,getLearns, getTeacher, getusers} =require("../controller/UserController");
router.route("/newUser").post(createUser);
router.route("/login").post(login)
router.route("/userLearn/:id").post(newLearn)
router.route("/mylearn/:id").get(getLearns);
router.route("/users").get(getusers);
router.route("/teacher").get(getTeacher);
module.exports=router;