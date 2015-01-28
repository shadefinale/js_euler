/* This is a very hacked-together solution to this problem. Using proper algebra one can create a better solution. */

function euler9_pythagorean_triplet(){
    // Start with three values such that a < b < c. A and B are equivalent but only for the first pass, in which after one will be bigger than the other but not larger than c.
    var a = 333,
        b = 333,
        c = 334,
        answer = 0;

    // Iterate an arbitrary amount of times, I assume that c will not be more than 734 so ctr is up to 400.
    for (var ctr = 0; ctr < 400; ctr++){
        for (var i = 0; i < b; i++){  
            // Check if we have found our pythagorean triple.

            // We take our a and b values, and bring them closer to each other, comparing at each pass if a^2 + b^2 == c^2
            if (Math.pow((a+i),2) + Math.pow((b-i), 2) == Math.pow(c, 2)){
                answer = [(a+i),(b-i),c];
            }
        }
    
        // If we haven't found our triple, increment c by 1, and decrement b by 1.
        c += 1;
        b -= 1;  
    }

    // We return an array that has a string representing the 3 numbers of the triplet, and the product of those three numbers.
    return ["" + answer[0] + " " + answer[1] + " " + answer[2], answer[0]*answer[1]*answer[2]];
}

function init(){
    var answer = document.getElementById("euler9");

    var result = euler9_pythagorean_triplet();

    answer.innerHTML = "The triple is: " + result[0] + " and the product is : " + result[1];
}

document = window.document;
window.onload = init;
