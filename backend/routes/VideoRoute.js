const express =require("express")
const {createVideo,getVideo,getVideos} =require("../controller/VideoController")
const router=express.Router();
router.route("/newVideo").post(createVideo);
router.route("/videos").get(getVideos);
router.route("/:id/learn").get(getVideo);
module.exports=router;