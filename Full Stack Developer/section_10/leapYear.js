// This is a program to test the if a year is leap year.

var year=prompt('What is the year you want to test: ');

if (year%4 ===0){
    if (year%100===0){
        if (year%400){
            console.log(year+' is Leap Year')
        }else{
            console.log(year+' is not leap Year')
        }
    }else{
        console.log(year+' is Leap Year')
    }
}else{
    console.log(year+' is not leap Year')
}
