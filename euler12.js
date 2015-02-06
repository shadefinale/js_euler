function euler12_triangle(){
    var answer = 0;
    var counter = 0;
    var current_number = 0;
    while (answer == 0){
        counter += 1;
        current_number += counter;
        if (count_divisors(current_number) > 500) {
            answer = current_number;
            break;
        }

    }

    return answer;
}

// A helper function to check the amount of divisors a number has.
function count_divisors(num){
    var factors = {},
        numFactors = 2,
        currNum = num,
        currFactor = 2;

    while (!check_prime(currNum)){
        if (currNum % currFactor !== 0){
            if (!factors[currFactor]){
                factors[currFactor] = 1;
            } else {
                factors[currFactor] += 1;
            }
        } else {
            currFactor += 1;
        }
    }

    if (!factors[currNum]){
        factors[currNum] = 1;
    } else {
        factors[currNum] += 1;
    }

    div_count = 1;
    
    for (var key in factors){
        div_count *= factors[key] + 1;
    }

    return div_count;
 
}

function check_prime(num){
    if ((num % 2) == 0){
        return false;
    }

    for (var i = 3; i < (Math.pow(num, .5) + 1); i += 2){
        if ((num % i) == 0){
            return false;
        }
    }
    return true;
}

function init(){
    var answer = document.getElementById("euler12");

    answer.innerHTML = "The answer is: " + euler12_triangle();
}

document = window.document;
window.onload = init;


