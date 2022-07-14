const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    _id:mongoose.SchemaTypes.ObjectId,
    name:String,
    email:String,
    phone:String,
    gender:String,
    image:{
        type:String,
        required:true
    }
});

// const studentModel = mongoose.model('student',studentSchema);
module.exports = mongoose.model('student',studentSchema);


