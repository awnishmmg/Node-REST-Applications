var express = require("express");
var mongoose = require("mongoose");
var config = require("./config.json");
var bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var app = express();

//Add body parser setting
app.use(bodyParser.urlencoded(config.parserOptions));
// we have take json data
app.use(bodyParser.json());

/***************All Routes Register Here*********************************/

const empRoute = require("./routes/api/emp");
const studentRoute = require("./routes/api/studentRoute");

/***************All Routes Register Here*********************************/



//Middleware : use middleware 
//next is closure.


mongoose.connect(config.connection);

//error state
mongoose.connection.on("error",error=>{
     console.log("Cannot Connect to Mongodb Atlas"+error);
});
//connected state

mongoose.connection.on("connected",data=>{
    console.log("Database Connected"+data);
});


app.use('/emp',empRoute);
app.use('/student',studentRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



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

