function euler12_triangle(){
    var answer = 0;
    var counter = 1;
    var current_number = 1;
    while (answer == 0){
        if (count_divisors(current_number) >= 500) {
            answer = current_number;
            break;
        }
        counter += 1;
        current_number += counter;
    }

    return answer;
}

// A helper function to check the amount of divisors a number has.
function count_divisors(num){
    var div_count = 1;
    for (var i = 1; i<num; i++){
        if (num % i == 0){
        div_count += 1;
        }
    }

    return div_count;
}

function init(){
    var answer = document.getElementById("euler12");

    answer.innerHTML = "The answer is: " + euler12_triangle();
}

document = window.document;
window.onload = init;


