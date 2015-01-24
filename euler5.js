/* 

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

We will just do a simple solution that brute forces the answer, in a function that can take any value. For example, if we input 10, we will get the answer 2520.
 */
function euler5_smallest_multiple(largest){
    var answer = false,
        current = largest,
        i = 0;

    while (!answer){
        current += largest;
        while (current % i === 0 && i <= largest){
            if (i === largest){
                answer = true;
            }
            i++;
        }
        i = 1;
    }

    console.log(current);
    return current;
}


function init(){
    var answer =  document.getElementById("euler5"),
        euler5_answer = euler5_smallest_multiple(20);

    answer.innerHTML = "The answer is: " + euler5_answer;
}

document = window.document;
window.onload = init;
