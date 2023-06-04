const express =require("express")
const http =require("http");
const path =require("path");
const cors =require("cors")
const ConnectDb=require("./config/db/db")
const Category =require("./routes/CategoryRoute");
const Learn =require("./routes/LearnRoute");
const User =require("./routes/UserRoute");
const Video =require("./routes/VideoRoute");
const Schedule=require("./routes/ScheduleRoute");
const app=express();

require("dotenv").config({path:"./config/config.env"})

ConnectDb();
const PORT  =process.env.PORT || process.env.API_PORT
var whitelist=["http://localhost:3000"];
var corsOptions={
    origin:function(origin,callback){
        if(origin === undefined || whitelist.indexOf(origin) !==1)
        {
            callback(null,true)
        }
        else {
            callback(new Error("Horigloj baina"))
        }
    },
    allowedHeaders:"Authorization,SetCookie, Content-Type",
    methods:"GET,POST,PUT,DELETE,PATCH",
    credentials:true
}
app.use(express.json())
app.use(cors(corsOptions));
app.use("/api/v1/category",Category);
app.use("/api/v1/learn",Learn);
app.use("/api/v1/auth",User);
app.use("/api/v1/schedule",Schedule)
app.use("/api/v1/video",Video);
const server =http.createServer(app);
server.listen(PORT,()=>{
    console.log(`Сервэр ажиллаж байна. Порт нь ${PORT}`)
});
