import express from 'express'
import connectDB from '../demo/db/connectDB.js';

const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb"

connectDB(DATABASE_URL)

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})