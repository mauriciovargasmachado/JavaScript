
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo')
const textoVerde = document.getElementById('texto-verde')
const textoAzul = document.getElementById('texto-azul')

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerHTML = rojo;
textoVerde.innerHTML = verde;
textoAzul.innerHTML = azul;

function colorUpdate(rojo,verde,azul){
    const RGB = `rgb(${rojo},${verde},${azul})`;
    console.log(RGB);
    document.body.style.backgroundColor = RGB
}

inputRojo.addEventListener('change',(e)=> {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    colorUpdate(rojo,verde,azul);
})

inputVerde.addEventListener('change',(e)=> {
    verde = e.target.value;
    textoVerde.innerText = verde;
    colorUpdate(rojo,verde,azul);
})

inputAzul.addEventListener('change',(e)=> {
    azul = e.target.value;
    textoAzul.innerText = azul;
    colorUpdate(rojo,verde,azul);
})