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

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log(`Respuesta recibida: ${respuesta}`);
        const procesarPedido = await procesarPedido(respuesta);
        console.log(procesarPedido);
    }
    catch(error){
        console.log(error);
    } 
}


realizarPedido('Papas');