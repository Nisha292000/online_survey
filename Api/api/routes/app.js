const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');

const surveyRoute = require('../controller/survey');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1/Online_Survey')

const db = mongoose.connection;  
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Routes which should handle requests 
app.use('/survey',surveyRoute);

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=400;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})


module.exports = app;