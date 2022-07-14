var env = require("dotenv").config();
const express = require("express");
const studentModel = require("../../models/studentModel");
const studentController = require("../../controllers/StudentController");
const router = express.Router();
const multer  = require('multer');
const fs = require("fs");
const { response } = require("express");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.STORAGE_LOCAL_PATH);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+"-"+file.originalname)
    }
  })


const fileFilter = (req,file,cb) =>{
  
  // promise => 1. accept(true) 2. reject(false)

  console.clear();
                      // 0         //1          //2
  let AllowedTypes = ['image/png','image/jpeg','image/jpg'];
  if(AllowedTypes.indexOf(file.mimetype) != -1){
      // console.log("valid File Extension");
     cb(null,true).then(result=>{
        response.status(200).json({
          "message":"File Uploaded Successfully"
        })
     })
  }else{
    // 
    cb(null,false).catch(error=>{
      response.status(200).json({
        "message":"File Not uploaded Successfully"
      })
    })
  }
                    



};
//set up multer
const upload = multer(
    // { dest: 'public/uploads/' }
    {storage:storage,
      limits:1024*1024*2,
      fileFilter:fileFilter,
    }
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



