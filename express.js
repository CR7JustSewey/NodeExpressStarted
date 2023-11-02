const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.send("<h1>Hello World</h1>");
})
app.get("/about",function(req,res){
    res.send("<mark>We learn Node</mark>");
})
app.get("/contact",function(req,res){
    res.send("<h1>I live in the world</h1>");
})

app.listen(3000,function(){
    console.log("Server is running at Port 3000");
})