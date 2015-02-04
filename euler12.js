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
    if (num % 2 == 0){
        num = num / 2;
    }

    var count = 0;
    
    while (num % 2 == 0){
        count += 1;
        num = num / 2;
    }

    var div_count = count + 1,
        p = 3;

    while (num != 1){
        count = 0;
        while(num % p == 0){
            count += 1;
            num = num / p;
        }
        div_count = div_count * (count + 1);
        p += 2;
    }

    return div_count;
}

function init(){
    var answer = document.getElementById("euler12");

    answer.innerHTML = "The answer is: " + euler12_triangle();
}

document = window.document;
window.onload = init;


