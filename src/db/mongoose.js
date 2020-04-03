// const mongoose = require('mongoose')
// const express=require('express');
// const validator = require('validator')


// mongoose.connect('mongodb://localhost:27017/Demo').then(()=>{
//     console.log("Connected");
// }).catch(()=>{console.log("Not Connected");});

// const express=require('express');
// const app=express();
// const mongoose=require('mongoose');


// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/demo').then(()=>{
//     console.log("Connected");
// }).catch(()=>{console.log("Not Connected");});
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/demo', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})