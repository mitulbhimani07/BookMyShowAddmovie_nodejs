const BookMyShow = require("../models/BookMyshowModel");
const path = require('path');
const fs = require("fs");
const { query } = require("express");
const { title } = require("process");



module.exports.BookMyshow= async (req,res)=>{
    var search = '';
    if(req.query.Moviesearch){
        search = req.query.Moviesearch;
    }


    let MovieShow = await BookMyShow.find({
        $or: [
            {title : {$regex : search}}
        ]
    });
        return res.render('BookMyshow',{
            MovieShow,
            search
        })
    // try{
    //     let MovieShow = await BookMyShow.find();
    //     return res.render('BookMyshow',{
    //         MovieShow
    //     })
    // }
    // catch(err){
    //     console.log("BookMyshow wrong");
    //     return res.redirect('back');
    // }
}

module.exports.Views= async (req,res)=>{
  try{
    let singalMovie = await BookMyShow.findById(req.query.id);
    return res.render("Views",{
        singalMovie
    });
  }
  catch(err){
    console.log("Views Wrong");
    return res.redirect("back");
  }
}

module.exports.AddMovies= async (req,res)=>{
    // let MovieShow = await BookMyShow.find();
    // return res.render("AddMovies",{
    //     MovieShow
    // })
    try{
        return res.render('AddMovies')
    }
    catch(err){
        console.log("AddMovies wrong");
        return res.redirect('back');
    }
}

module.exports.insertMovies = async (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    var imageMovie = '';
    if(req.file){
        var imageMovie = BookMyShow.movieimg+"/"+req.file.filename;
        console.log(imageMovie);
    }
    req.body.image = imageMovie;

    await BookMyShow.create(req.body);
    return res.redirect("/");

}


