const express = require("express");
const studentModel = require("../../models/studentModel");
const studentController = require("../../controllers/StudentController");
const router = express.Router();

//Api for student Post
router.post('/create',studentController.createStudent);
//get Api
router.get('/',studentController.getAllStudent);
//Find Record by Id.
//@decorators
router.get('/:id',studentController.getStudentById);

module.exports = router;



