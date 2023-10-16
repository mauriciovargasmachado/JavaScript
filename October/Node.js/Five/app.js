const fs = require('fs');





fs.rename('index.html','main.html',(err)=>{
    if (err){
        throw err;
    }else{
        console.log('Cambio Existoso!')
    }
})


// fs.readFile('main.html','utf-8', (err,contenido)=>{
//     if(err){
//         console.log('There was a error in your file');
//     }else{
//         console.log(contenido);
//     }
// });