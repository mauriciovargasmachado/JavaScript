// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.paragraf');
const pid = document.getElementById('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML = "This is a new line!!!";

h1.innerText = "This is a new  second line!!!";

h1.getAttribute()

