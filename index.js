const express = require ("express");
 
const port = 8001;

const path = require('path');

const app = express();

// const BookMyshowdb = require("./config/BookMyshowdb");

const BookMyshow = require("./models/BookMyshowModel");

const mongoose = require('mongoose');
    mongoose.connect("mongodb+srv://mitulbhimani281:mF6u0wongMtNZE3l@cluster0.t7dse.mongodb.net/LTE4").then((res)=>{
        console.log('DB is Conected');  
    })
    .catch((err) => {
        console.log('Error connecting to the database:', err);
    });
    
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,"assets")));

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use("/",require("./routes/BookMyshowRoutes"));


//View Engine Data
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.listen(port,(err) =>{
    if(err){
         console.log(err);
    }
    console.log("Sever is Running on port:- " + port);
})