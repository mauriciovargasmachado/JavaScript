
const contenedor = document.getElementById('contenedor');
console.log(contenedor);
const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(titulo.innerText);
console.log(titulo.tagName);

const topping = document.getElementsByClassName('topping');
console.log(topping[0],topping[4]);


const mistoppings = document.getElementsByTagName('li');
console.log(mistoppings);

const fondoMarron = document.getElementsByClassName('fondo-marron');
console.log(fondoMarron);

const aceituna = document.querySelector('#aceitunas');
console.log(typeof aceituna);
console.log(aceituna);

const elements_1 = document.querySelector('ul li:not(.fondo-marron)');
console.log(typeof elements_1);
console.log(elements_1);

const elements_2 = document.querySelectorAll('.fondo-naranja');
console.log(typeof elements_2);
console.log(elements_2);
console.log(elements_2.length);

const cambiarFondoAceitunas = document.querySelector('.topping');
cambiarFondoAceitunas.style.backgroundColor = 'blue';
cambiarFondoAceitunas.style.textTransform = 'upperCase';
cambiarFondoAceitunas.style.color = '#6dff00';
console.log(cambiarFondoAceitunas.style);

const listaToppings = document.getElementById("lista-toppings");
console.log(listaToppings);
console.log(listaToppings.innerText);
console.log(listaToppings.textContent);

const titulo_1 = document.getElementById('titulo');
titulo_1.innerText = "This is a change in the title!"
titulo_1.setAttribute('href',"www.google.com");

const nuevoTopping = document.createElement('li');
nuevoTopping.classList.add('topping','fondo-naranja');
nuevoTopping.innerHTML='Acelgas';
listaToppings.append(nuevoTopping);






