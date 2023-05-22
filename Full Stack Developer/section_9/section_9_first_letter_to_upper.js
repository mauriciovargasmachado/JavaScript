// This program change the first letter of a given word to upper case

var name = prompt('What is your name: ')
var size=name.length
var first_letter=name.slice(0,1);
var final_letters=name.slice(1,size);
console.log('Hello '+first_letter.toUpperCase()+final_letters.toLowerCase());