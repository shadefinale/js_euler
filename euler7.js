/* Ctr is the current prime. When ctr is 1, current_prime is the 1st prime.

Current iteration is the next value we check. We start with 3, since it is the first prime after 2, and check if the value is a prime. If it is, we store that value in current_prime, and increment ctr by 1. After that, we increment current_iteration by 2, since only odd numbers from that point onward can be prime. We then continue to run until we have found the nth prime indicated by the value of num.*/
function euler7_nth_prime(num){
    var ctr = 1,
        current_prime = 2,
        current_iteration = 3;

    while (ctr < num){
        if (check_prime(current_iteration)){
            current_prime = current_iteration;
            ctr += 1;
        }
        /* We can increment by 2 because all even numbers are guaranteed to be non-primes. */
        current_iteration += 2;
    }

    return current_prime;
}

/* This helper function checks if a given number is prime by trying to divide it by all values 3 to sqrt(num). If the number is even, it instantly returns false, and because the function that will call it does not start until the number 3, it will never return check_prime(2) -> false. */
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
    var answer =  document.getElementById("euler7");

    answer.innerHTML = "The answer is: " + euler7_nth_prime(10001);
}

document = window.document;
window.onload = init;
