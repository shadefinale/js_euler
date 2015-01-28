/* Ctr is the current prime. When ctr is 1, current_prime is the 1st prime.

Start with 3, increment by 2 since positive even numbers that aren't 
2 aren't prime. */
function euler10_prime_sum(num){
    // Sum starts at 2 since 2 is the first prime but we start our
    // iteration at the second prime, 3.
    var sum = 2;
    for (var i = 3; i < num; i+=2){
        if (check_prime(i)){
            sum += i;
        }
    }

    return sum;
}

/* This helper function (also from a previous project euler
solution) checks if a given number is prime by trying to divide it
by all values 3 to sqrt(num). If the number is even, it instantly
returns false, and because the function that will call it does not
start until the number 3, it will never return check_prime(2) ->
false. */
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
    var answer =  document.getElementById("euler10");

    answer.innerHTML = "The answer is: " + euler10_prime_sum(2000000);
}

document = window.document;
window.onload = init;
