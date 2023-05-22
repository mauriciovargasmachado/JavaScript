
const express = require("express")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
    var num_1 = Number(req.body.num_1);
    var num_2 = Number(req.body.num_2);
    var result = num_1 + num_2;
    res.send("<h1>The result of the calculation is: </h1>" + result)
})

app.listen(3000, function(){
    console.log("server started on port 3000");
});