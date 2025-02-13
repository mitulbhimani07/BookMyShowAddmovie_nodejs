const express = require("express");

const routes = express.Router();

const BookMyShows = require("../models/BookMyshowModel");

const BookMyshowCtrl = require("../controllers/BookMyshowCtrl");

routes.get("/",BookMyshowCtrl.BookMyshow);

routes.get("/addmovies",BookMyshowCtrl.AddMovies);

routes.get("/views",BookMyshowCtrl.Views);

routes.post("/insertMovies",BookMyShows.uploadaImageFile,BookMyshowCtrl.insertMovies);

console.log("Add Routes");

module.exports = routes;