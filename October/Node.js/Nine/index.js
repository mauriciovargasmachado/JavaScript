const a = require("fs");

a.writeFile("firstFile.txt","this is a test",(err) => {
    if (err) throw err;
    console.log("This file has been saved!")
})