const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/calculator.html");
})
app.post("/",function(req,res){
    var firstNumber=Number(req.body.firstN);
    var secondNumber=Number(req.body.secondN);

    var result=firstNumber+secondNumber;
    res.send("The result is "+result);
})

app.listen(3000,function(req,res){
    console.log("Server is running on Port 3000");
})
//You need to install package by
//npm i express
//npm i body-parser

//App Run by 
//node bmi.js