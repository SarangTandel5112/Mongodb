import StudentModel from "../models/student.js";

class StudentController{
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            res.send({data:result})
        } catch (error) {
            console.log(error);
        }
    }

    static createDoc = async (req, res) => {
        try {
            console.log(req.body);
            const {name, age, fees} = req.body
            const doc = new StudentModel({
                Name:name,
                Age:age,
                Fees:fees
            })
            res.send("Creating Data...")
           doc.save();
           console.log(doc);
            //console.log(result);
        } catch (error) {
            
        }
        console.log("Create doc post method...");
    }

    static editDoc = async (req, res) => {

        try {
            const result = await StudentModel.findById(req.params.id)
            res.send({data:result})
        } catch (error) {
            console.log(error);
        }
        
    }

    static updateDocById = async (req, res) => {

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