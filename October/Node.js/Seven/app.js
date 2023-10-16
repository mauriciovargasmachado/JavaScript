const eventEmitter = require('events');

const emisorProductos = new eventEmitter;

emisorProductos.on('compra',()=>{
    console.log('Se ha realizado una compra.')
});

emisorProductos.emit('compra');