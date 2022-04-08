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
           doc.save();
           res.send("done")
           console.log(doc);
            //console.log(result);
        } catch (error) {
            
        }
        console.log("Create doc post method...");
    }

    // static editDoc = async (req, res) => {

    //     try {
            
    //         const result = await StudentModel.findById(req.params.id)
    //         res.send({data:result})
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }

    static updateDocById = async (req, res) => {

        try {
            console.log(req.body);
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            const allstudent=await StudentModel.find();
            res.send(allstudent);
            // res.redirect("/student")
        } catch (error) {
            console.log(error);
        }
    }

    static deleteDocById = async (req, res) => {

        try {
            console.log(req.params);
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            const alldata=await StudentModel.find();
            res.send(alldata)
        } catch (error) {
            console.log(error);
        }
    
    }
    
    
}

export default StudentController;   