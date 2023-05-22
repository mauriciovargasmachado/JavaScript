
const express = require("express")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
    var weight = parseFloat(req.body.num_1);
    var height = parseFloat(req.body.num_2);
    var result = weight/(height*weight);
    res.send("<h1>Your BMI is : </h1>" + result)

})

app.listen(3000, function(){
    console.log("server started on port 3000");
});