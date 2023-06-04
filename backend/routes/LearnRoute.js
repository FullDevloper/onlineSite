const express =require("express");
const {createLearn,getUserLearn,getsLearn,getLearn, getVideos, getLearnTanhim} =require("../controller/LearnController")
const router=express.Router();
router.route("/newLearn").post(createLearn);
router.route("/:id/user").get(getUserLearn);
router.route("/learns").get(getsLearn);
router.route("/learntanhim").get(getLearnTanhim)
router.route("/oneLearn/:id").get(getLearn)
router.route("/videos/:id").get(getVideos)
module.exports=router;
