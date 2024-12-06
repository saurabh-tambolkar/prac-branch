const express = require("express")
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({message:"this is home page of node js project"})
})

app.get('/secret',(req,res)=>{
    res.status(200).json({message:"this is secret  page"})
})

app.get('/home',(req,res)=>{
    res.status(200).json({message:"this is home  page"})
})

app.listen('5000',()=>{
    console.log('Server is running on port 5000')
})