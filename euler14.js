// A recursive function that gives the number of terms in a collatz sequence starting with the number 'num'
// I've added a second argument to get_collatz_terms, representing a cache of terms.
// If the current number we are checking is in the cache, instead of calling get_collatz_terms recursively again
// we just return the answer we've previously calculated.
function get_collatz_terms(num, cache){
    if (cache[num]){
        return cache[num];
    }
    if (num == 1){
        return 1;
    } else if (num % 2 == 0){
        return get_collatz_terms(num/2, cache) + 1;
    } else {
        return get_collatz_terms((3 * num) + 1, cache) + 1;
    }
}


// A slow-ish function that will return the number under one million that has a sequence with the highest amount of terms.
function euler_14(){
    var largest = 0;
    var answer = 0;
    // We've added a javascript object named 'cache', that will cache counts of terms as we iterate through our for loop.
    var cache = {};

    for (var i = 1; i < 1000000; i++){
        terms = get_collatz_terms(i, cache);
        cache[i] = terms;
        if (terms > largest){
            largest = terms;
            answer = i;
        }
    }
    return answer;
}

function init(){
    answer = document.getElementById("euler14");

    answer.innerHTML = "The answer is: " + euler_14();
}

document = window.document
window.onload = init;
