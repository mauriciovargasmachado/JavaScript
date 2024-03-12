let a = [8,4,3,5,8]

function list_of_grades(){
    let list = document.getElementById('grades_list');

    for (let grade of a){
        let i = document.createElement("li");
        i.innerText = grade;
        list.appendChild(i)
    }
}

function average_calculation(){

    let suma = 0;

    for (i=0; i < a.length; i++){
        suma += a[i];
    }

    average = (suma/a.length)

    document.getElementById("average").textContent = average

}

function highest_grade__calculation(){

    let high = 0;
    let i = 0;

    while(i<a.length){
        if (a[i]>high){
            high=a[i]
        }
        i++
    }

    document.getElementById("highest").textContent = high

}

function lowest_calculation(){

    let low = a[0];
    let i = 1;

    while (i < a.length) {
        if (a[i] < low) {
            low = a[i];
        }
        i++;
    }

    document.getElementById("lowest").textContent = low

}