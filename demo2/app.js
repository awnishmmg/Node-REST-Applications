var express = require("express");
var app = express();

/***************All Routes Register Here*********************************/

const empRoute = require("./routes/api/emp");

/***************All Routes Register Here*********************************/




//Middleware : use middleware 
//next is closure.
app.use('/emp',empRoute);

app.use((request,response,next)=>{

    let student = [
        {"id":1001,"name":"vikas","class":"Btech"},
        {"id":1002,"name":"Chotu","class":"12th"},
        {"id":1003,"name":"Awnish","class":"MBA"},
        {"id":1004,"name":"Shiv","class":"Diploma"},
        {"id":1005,"name":"Anil soni","class":"MBA"}
    ]
    response.status(200).json({

        "message":"This is Api Middleware",
        "code":200,
        "status":true,
        "data" :student,
        "error":false,

    });
})

module.exports = app;

