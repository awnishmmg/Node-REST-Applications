const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    _id:mongoose.SchemaTypes.ObjectId,
    name:String,
    email:String,
    phone:String,
    gender:String
});

module.exports = mongoose.model('student',studentSchema);
