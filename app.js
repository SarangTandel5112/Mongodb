import express from 'express'

import connectDB from './db/connectDB.js';
import join from 'path';


const app = express()
const port = process.env.PORT || '5000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb"

connectDB(DATABASE_URL)

//static files
app.use(express.static(join(process.cwd, "public")))

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})