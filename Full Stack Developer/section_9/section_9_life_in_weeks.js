// this program shows the remainign weeks to live a person will have. 

function life_in_weeeks(age){

    var years=90-age;
    var months = years*12;
    var weeks = months*4;
    console.log('You have: '+ weeks +'to live');

}

life_in_weeeks(prompt('what is your age?: '))