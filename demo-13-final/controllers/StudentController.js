const mongoose = require("mongoose");
const express = require("express");
const studentModel = require("../models/studentModel");

const getStudentById = (request,response,next)=>{

    const _id = request.params.id;
    
    studentModel.findById(_id).then(result=>{
     response.status(200).json({
         "message":"Student Record Found for Id "+_id,
         "data":result,//Array of Object,
         "status":true,
         "error":false,
     });
 
    }).catch(error=>{
     response.status(500).json({
         "message":"No Record Found",
         "data":[], //Array of Object,
         "status":false,
         "error":error,
     });
    });
 
}

//controller for creating a student
const createStudent = (request,response,next)=>{
    
    const Student = new studentModel({
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
        });

        }).catch(error=>{
            response.status(500).json({
               "message" :"Cannot Create the Record",
               "error":error
            });
    });


}
//controller for getAllStudents
const getAllStudent = (request,response,next)=>{
    
    studentModel.find().then(result=>{
     response.status(200).json({
         "message":"All Student Record Found",
         "data":result,//Array of Object,
         "status":true,
         "error":false,
     });
 
    }).catch(error=>{
     response.status(500).json({
         "message":"No Record Found",
         "data":[], //Array of Object,
         "status":false,
         "error":error,
     });
    });
 
 }

//Controller to Delete Student
const deleteStudentById = (request,response,next)=>{
    const student_id = request.params.id;
    
    studentModel.remove({_id:student_id}).then(result=>{

        response.status(200).json({
            "message":"Student Record Deleted with Id = "+student_id,
            "data":result,
            "status":true,
            "error":false,

        });

    }).catch(error=>{

        response.status(500).json({
            "message":"Cannot Delete the Student Record.",
            "data":[], //Array of Object,
            "status":false,
            "error":error,
        });
    });
};

//put request
//controller for creating a student
const updateStudent = (request,response,next)=>{
    
    studentModel.findOneAndUpdate({_id:request.params.id},
        { $set :{
                    name : request.body.name,
                    gender : request.body.gender,
                    email : request.body.email,
                    phone : request.body.phone
        }
    }).then(result=>{
        response.status(200).json({
            "message":"record Updated Successfully",
            "data":result,
        });

        }).catch(error=>{
            response.status(500).json({
               "message" :"Cannot update the Record",
               "error":error
            });
    });


}

module.exports = {
    getStudentById,
    createStudent,
    getAllStudent,
    deleteStudentById,
    updateStudent,
}