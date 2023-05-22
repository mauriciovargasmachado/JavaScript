// this program tell the user how many characters have used and how many have left.

var twitt = prompt('what is your messege: ');

var size=twitt.length;

var remaining_size = 140-size;

console.log('Your messege have ' +size +" characters.");

console.log('You have '+remaining_size+' characters left');

var new_twitt=twitt.slice(0,140);

console.log(new_twitt);