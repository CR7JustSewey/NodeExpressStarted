const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
})
app.post("/",function(req,res){
    const Weight=Number(req.body.weight);
    const Height=Number(req.body.height);

    const bmiResult=Weight / Height * Height;
    res.send("You BMI result is "+Math.round(bmiResult));

})

app.listen(3000,function(req,res){
    console.log("Server is running on Port 3000");
})
//You need to install package by
//npm i express
//npm i body-parser

//App Run by 
//node bmi.js