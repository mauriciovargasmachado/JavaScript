const http = require('http');

const servidor = http.createServer((req,res)=>{
    res.end('Respuesta del servidor lograda');
});

const Puerto = 3000;

servidor.listen(Puerto,()=>{
    console.log(`Servidor corriendo en el puerto ${Puerto}`);
    console.log('Servidor activo');
    
});