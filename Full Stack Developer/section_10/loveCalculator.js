// this program is a love calculator base on the user input

var name_1=prompt('What is the first name: ');

var name_2=prompt('what is the second name: ');

var random_number=(Math.random())*(name_1.length+name_2.length)*5;

var love_score=Math.round(random_number)

console.log("Your love score is: "+love_score+"%");

if (love_score<30){
    console.log("You have very low chances of success in your relationship")
} else if(love_score<70){
    console.log("You have avarage success ration un your relationship")
} else{
    console.log("You have high chance of success in your relationship")
}