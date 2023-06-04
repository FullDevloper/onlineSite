const mongoose =require("mongoose")
const connectDB = async()=>
{
    mongoose.set("strictQuery", false);
    // url ni mongodb iin connect hesgeees clusterer aas 2 dahi ruu ni orood avna
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true, 
        useUnifiedTopology:true
    });
    console.log(`MongoDB холбогдлоо,${conn.connection.host}`);
}
module.exports=connectDB;