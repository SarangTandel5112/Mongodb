import mongoose  from "mongoose";


// const connectDB = (DATABASE_URL) => {
//     return mongoose.connect(DATABASE_URL)
//     .then(() => {
//         console.log("Connected successfully...");
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName:"School",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected successfully...");
    } catch (err) {
        console.log(err);
    }
}
export default connectDB;