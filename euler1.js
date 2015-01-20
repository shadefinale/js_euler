function init(){
    var answer =  document.getElementById("euler1");
    answer.innerHTML = euler1_answer();
}

/* Find the sum of all multiples of 3 or 5 below 1000. */
function euler1_answer(){
    var sum = 0;
    for (var i = 0; i < 1000; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return "The sum is: " + sum;
}

document = window.document;
window.onload = init;

