/* Function that returns the largest palindrome made from the product
of two 3-digit numbers.

To solve I've iterated through the products of the numbers 900x900 to 999x999 under the assumption that at least one of these products is palindromic, which after finding the solution is obviously the case. If it were not the case, I would iterate through 800x800 to 899x899, and continue to go down towards 1x1 until I found a palindromic product.
 */
function euler4_palindrome(){
    var answer = 0;
    
    for (var i = 900; i<1000; i++){
        for (var j = 900; j<1000; j++){
        if (is_palindrome((i*j))){
            if (i*j > answer){
                answer = i*j;
                }
            }
        }
    }

    return answer;
}

/* Takes an int, casts it to a string, and checks if the string is palindromic.f Only made to work with 6 digit numbers since all the products from 900x900 to 999x999 are 6 digit numbers. */
function is_palindrome(num){
    var num_str = num.toString();
    
    var first_three_digits = num_str.substring(0,3);
    var second_three_digits = num_str.substring(6,3);

    
    /* No simple way to reverse the string that I could find,
    /* so I just compared the digits manually */
    
    var first_and_last = (first_three_digits[0] == second_three_digits[2]);

    var middle_digits = (first_three_digits[1] == second_three_digits[1]);

    var last_and_first = (first_three_digits[2] == second_three_digits[0]);

    return (first_and_last && middle_digits && last_and_first);
}

function init(){
    var answer =  document.getElementById("euler4"),
        euler4_answer = euler4_palindrome();

    answer.innerHTML = "The answer is: " + euler4_answer;
}

document = window.document;
window.onload = init;
