const StudentModel = require("../../models/studentModel");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//Api for student Post
router.post('/create',(request,response,next)=>{
    
        const Student = new StudentModel({
            _id: new mongoose.Types.ObjectId,
            name : request.body.name,
            gender : request.body.gender,
            email : request.body.email,
            phone : request.body.phone
        });
        
        Student.save().then(result=>{
            response.status(200).json({
                "message":"record Inserted Successfully",
                "data":result,
            }).catch(error=>{
                response.status(500).json({
                   "message" :"Cannot Create the Record",
                   "error":error
                });
            })
        });


});

module.exports = router;



