
const button = document.querySelector('button');
const color_text = document.getElementById('color');

function generador_aleatorio(){
    let digitos = '0123456789ABCDEF';
    let color_generado = '#';

    for(let i =0; i<6; i++){
        let aleatorio =Math.floor(Math.random()*16);
    color_generado += digitos[aleatorio];
    }
    return color_generado
}

function action(){
    let color_aleatorio = generador_aleatorio();
    color_text.textContent = color_aleatorio;
    console.log(color_text.textContent);
    document.body.style.backgroundColor = color_aleatorio;
    console.log(document.body.style.backgroundColor);
    button.style.backgroundColor = color_aleatorio;
}

button.addEventListener('click',action)


