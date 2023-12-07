const http = require('http');
const cursos = require('./cursos');

const server = http.createServer((req, res) => {

    const {method} = req;
    switch(method){
        case 'GET':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(cursos));
            break;
        case 'POST':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('POST');
            break;
        case 'PUT':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('PUT');
            break;
        case 'DELETE':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('DELETE');
            break;
        default:
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Método no soportado');
            break;
    }



});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    });