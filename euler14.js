// A recursive function that gives the number of terms in a collatz sequence starting with the number 'num'
function get_collatz_terms(num){
    if (num == 1){
        return 1;
    } else if (num % 2 == 0){
        return get_collatz_terms(num/2) + 1;
    } else {
        return get_collatz_terms((3 * num) + 1) + 1;
    }
}


// A slow-ish function that will return the number under one million that has a sequence with the highest amount of terms.
function euler_14(){
    var largest = 0;
    var answer = 0;

    for (var i = 1; i < 1000000; i++){
        terms = get_collatz_terms(i);
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
