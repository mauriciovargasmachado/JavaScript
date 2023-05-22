// This program select a random name form a array

var names=['Joe','Ana','David','Jhon','Carlos','Carl','Antony']

var numberOfPeople=names.length;

var random_number = Math.round(Math.random(numberOfPeople)*10);

console.log(names[random_number]);