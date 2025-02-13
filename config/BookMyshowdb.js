const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Blogs");
const BookMyshowdb =mongoose.connection;
BookMyshowdb.once("open",(err)=>{
        if(err){
            console.log(err);
            return false;
        }
        console.log("Db is Connected");
    })

module.exports=BookMyshowdb;