import express from 'express'

import connectDB from './db/connectDB.js';

import web from './routes/web.js'


const app = express()
const port = process.env.PORT || '5000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)

//static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/student", web);
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})