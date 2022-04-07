const { urlencoded } = require('express');
const express=require('express')
const app=express()
const monogoose=require('mongoose')

app.use(express.urlencoded({extended:false}));
app.use(express.json())



app.post("/send",(req,res)=>{
    console.log("/send");
    console.log(req.body);
})

app.listen(5000,(()=>{
    console.log("server");
}))