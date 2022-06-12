const mongoose = require("mongoose")

const MONGO_URI = `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.ralsg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(MONGO_URI, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("connected to database");
    }
})