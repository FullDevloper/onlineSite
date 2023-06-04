const {createSchedlue, schedules, Tschedules} =require("../controller/ScheduleController");
const express =require("express")
const router =express.Router();
router.route("/newSchedule").post(createSchedlue);
router.route("/student").get(schedules)
router.route("/teachStudent").get(Tschedules)
module.exports=router