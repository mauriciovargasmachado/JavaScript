function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de la tienda`);
        setTimeout(()=>{
            if (producto == "Papas"){
                resolve(`Se han ordenado: ${producto}`);
            }else{
                reject(`No se ha podido ordenar: ${producto}`);
            }
        },1000)
})
}

function procesarPedido(respuesta){
    return new Promise((resolve, reject) => {
        console.log(`Procesando respuesta`);
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(()=>{
            resolve(`Gracias por comprar: ${respuesta} disfrute su producto`);
        },4000)
})
}

ordenarProducto('papas')
    .then(respuesta=>{
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada=>{
        console.log(respuestaProcesada);
    })
    .catch(error=>{
        console.log(error);
    })