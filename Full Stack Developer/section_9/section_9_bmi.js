// this program returns the BMI (Body Mass Index) of the user. 

function bmi_calculator(weight,height){
    console.log('Your current BMI is: '+weight/(height*height));
}


bmi_calculator(prompt("Please type your weight: "),prompt("please type your height:"))