const a = require("fs");

a.readFile("./firstFile.txt", "utf8", (err,data)=>{
    if (err) throw err;
    console.log(data);
})