
var random_number_1 = Math.floor(Math.random() * 7)

var random_number_2 = Math.floor(Math.random() * 7)




var dice_image_1= "images/dice" + random_number_1 + ".png";

var dice_image_2= "images/dice" + random_number_2 + ".png";



var change_image_1 = document.querySelectorAll("img")[0]

change_image_1.setAttribute("src",dice_image_1)

var change_image_2 = document.querySelectorAll("img")[1]

change_image_2.setAttribute("src",dice_image_2)

if (random_number_1>random_number_2){
    document.querySelector("h1").innerHTML= "Player 1 Wins!!!"
}
else if(random_number_2>random_number_1){
    document.querySelector("h1").innerHTML= "Player 2 Wins!!!"
}
else{
    document.querySelector("h1").innerHTML= "Draw!!!"
}
