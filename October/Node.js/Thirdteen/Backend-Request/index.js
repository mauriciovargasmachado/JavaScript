import  express  from "express";

const app = express();

const port = 3000;

app.get("/",(req, res)=>{
    res.send("this is running!")
})

app.get("/home",(req, res)=>{
    res.send("<h1>welcome!</h1>")
})

app.get("/contact",(req, res)=>{
    res.send("<h1>Contact me</h1><p>(437)5748653!</p>")
})




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})