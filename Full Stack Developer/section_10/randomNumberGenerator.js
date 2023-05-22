// This program creates a random number generator.


var range=prompt('please set a range for your random number: ');

var random_number=(Math.random())*range;

console.log("You have selected a range between 0 and, "+ range);

console.log("Your random number is: "+random_number);

console.log("Your round random number is: "+ Math.round(random_number));