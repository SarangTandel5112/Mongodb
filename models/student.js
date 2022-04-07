import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    Name:{type:String, required: true, trim: true},
    Age:{type: Number, required: true, min:18, max:60},
    fees:{type: mongoose.Decimal128, required: true, validate: (value)=> value >= 5000}
})

const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;