const mongoose = require('mongoose');

const BookMyshowImage="/uploads";

const path = require("path");

const multer = require('multer');

const { type } = require('os');

const BookMyshowSchema = mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    rating:{
        type : String,
        required : true
    },
    type:{
        type : String,
        require : true
    },
    language:{
        type : String,
        required : true
    },
    movietime:{
        type : String,
        required : true
    },
    date:{
        type : String,
        required : true
    },
    image:{
        type : String,
        required : true
    }
})

const storageImage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"..",BookMyshowImage))
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
})

BookMyshowSchema.statics.uploadaImageFile=multer({storage:storageImage}).single("image");

    BookMyshowSchema.statics.movieimg = BookMyshowImage;
const BookMyshow = mongoose.model('BookMyshow',BookMyshowSchema);

module.exports = BookMyshow;
