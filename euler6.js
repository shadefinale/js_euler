function euler6_sum(num){
    var squared_sum = 0,
        sum_squares = 0;

    for (var i = 1; i<=num; i++){
        sum_squares += i;
        squared_sum += (i*i);
    }

    sum_squares = sum_squares * sum_squares;

    return sum_squares - squared_sum;
}


function init(){
    var answer =  document.getElementById("euler6"),
        euler6_answer = euler6_sum(100);

    answer.innerHTML = "The answer is: " + euler6_answer;
}

document = window.document;
window.onload = init;
