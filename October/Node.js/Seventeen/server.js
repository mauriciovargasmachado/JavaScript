const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(' solicitud realizada')
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(' Respuesta realizada')
    console.log(res.statusCode);
    res.statusCode = 404;
    console.log(res.statusCode);
});

const puerto = 3000;

server.listen(puerto, ()=>{
    console.log(`Servidor activo en el puerto: ${puerto}`);
});