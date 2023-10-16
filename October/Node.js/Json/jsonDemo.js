const curso = require('./curso.json');

console.log(curso);

console.log(typeof curso);

console.log(curso.Numero_Horas);

let info_Curso = curso;

let info_curso_json = JSON.stringify(info_Curso);

console.log(info_curso_json);
console.log(typeof info_curso_json);

let info_curso_objeto = JSON.parse(info_curso_json);
console.log(info_curso_objeto);
console.log(typeof info_curso_objeto);