import StudentModel from "../models/student.js";

class StudentController{
    static getAllDoc = async (req, res) => {
        console.log("api");
        try {
            const result = await StudentModel.find()
            console.log(result);
            res.send({data:result})
        } catch (error) {
            console.log(error);
        }
    }

    static createDoc = async (req, res) => {

        try {

            const {name, age, fees} = req.body
            const doc = new StudentModel({
                Name:name,
                Age:age,
                Fees:fees
            })
            const result = await doc.save();
            //console.log(result);
        } catch (error) {
            
        }
        console.log("Create doc post method...");
        console.log(req.body);
        res.redirect("/student");
    }

    static editDoc = async (req, res) => {

        try {
            const result = await StudentModel.findById(req.params.id)
            res.send({data:result})
        } catch (error) {
            console.log(error);
        }
        
    }

    static upadteDocById = async (req, res) => {

        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect("/student")
        } catch (error) {
            console.log(error);
        }
    }

    static deleteDocById = async (req, res) => {

        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error);
        }
    
    }
    
    
}

export default StudentController;   