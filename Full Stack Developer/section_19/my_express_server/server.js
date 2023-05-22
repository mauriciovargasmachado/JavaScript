//jshint esversion:6

const express =require("express")

const app = express();

app.get("/",function(request,response){
    response.send("<h1>Hello world!</h1>")
})

app.get("/contact",function(req,res){
    res.send("<h2>Contact me at Mauriciovargasmachado@gmail.com</h2>")
})

app.get("/about",function(req,res){
    res.send("<h3>This may content a brief history about the author </h3>")
})

app.get("/imnovation",function(req,res){
    res.send("<h3>This may content all the relevant developments made by the author </h3>")
})

app.listen(3000, function(){
    console.log("server started on port 3000");
});
