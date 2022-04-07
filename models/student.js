import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    Name:{type:String, required: true, trim: true},
    Age:{type: Number, required: true, min:18, max:60},
    Fees:{type: Number, required: true}
})

const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;