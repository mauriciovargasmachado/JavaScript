function showResult(resultado) {
    document.getElementById("result").value = +resultado;
}

function add() {
    let number_1 = +document.getElementById("value_1").value;
    let number_2 = +document.getElementById("value_2").value;

    let addition = number_1 + number_2;
    showResult(addition);
}

function clearResult() {
    let borrar = 0
    document.getElementById("value_1").value = 0;
    document.getElementById("value_2").value = 0;
    showResult(borrar);
}

function subs() {
    let number_1 = +document.getElementById("value_1").value;
    let number_2 = +document.getElementById("value_2").value;

    let addition = number_1 - number_2;
    showResult(addition);
}

function mult() {
    let number_1 = +document.getElementById("value_1").value;
    let number_2 = +document.getElementById("value_2").value;

    let addition = number_1 * number_2;
    showResult(addition);
}

function div() {
    let number_1 = +document.getElementById("value_1").value;
    let number_2 = +document.getElementById("value_2").value;

    let addition = number_1 / number_2;
    showResult(addition);
}

function root() {
    let number_1 = +document.getElementById("value_1").value;
    showResult(Math.sqrt(number_1))
}

function pow() {
    let number_1 = +document.getElementById("value_1").value;
    let number_2 = +document.getElementById("value_2").value;
    showResult(Math.pow(number_1,number_2));
}

function abs() {
    let number_1 = +document.getElementById("value_1").value;
    showResult(Math.abs(number_1));
}

function aleatory() {
    let min = +document.getElementById("value_1").value;
    let max = +document.getElementById("value_2").value;
    max = max+1
    showResult(Math.floor(Math.random() * (max - min) + min));
}

function redondeo() {
    let result = +document.getElementById("result").value;
    showResult(Math.round(result));
}

function ceil() {
    let result = +document.getElementById("result").value;
    showResult(Math.ceil(result));
}

function floor() {
    let result = +document.getElementById("result").value;
    showResult(Math.floor(result));
}