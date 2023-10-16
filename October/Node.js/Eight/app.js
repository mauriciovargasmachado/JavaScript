const promesaCumplida = true;

const mipromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (promesaCumplida){
            resolve('promesa cumplida')
        }else{
            reject('promesa rechazada.')
        }

    },3000)
});

// mipromesa.then((valor)=>{
//     console.log(valor);
// })

const manejarPromesaCumplida = (valor)=>{
    console.log(valor);
};

const manejarPromesaRechazada =(razonRechazo)=>{
    console.log(razonRechazo)
};

mipromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);

