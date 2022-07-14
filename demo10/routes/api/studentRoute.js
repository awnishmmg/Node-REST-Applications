var env = require("dotenv").config();
const express = require("express");
const studentModel = require("../../models/studentModel");
const studentController = require("../../controllers/StudentController");
const router = express.Router();
const multer  = require('multer');
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.STORAGE_LOCAL_PATH);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+"-"+file.originalname)
    }
  })

//set up multer
const upload = multer(
    // { dest: 'public/uploads/' }
    {storage:storage}
); //storage disk settings



//Api for student Post
router.post('/create',studentController.createStudent);
//get Api
router.get('/',studentController.getAllStudent);
//Find Record by Id.
//@decorators
router.get('/:id',studentController.getStudentById);
//Delete Record for student

router.delete('/:id',studentController.deleteStudentById);
//@update Student
router.put('/:id',studentController.updateStudent);

//@upload concept
router.post('/image',upload.single('image'),(request,response,next)=>{
  console.log(request.file);
  fs.rename(request.file.path,process.env.STORAGE_LOCAL_PATH+"/"+request.file.fieldname+".jpeg",(data,error)=>{

  });
});

//single upload multer.single
//multiple upload multer.array()

module.exports = router;



