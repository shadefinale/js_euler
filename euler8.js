function euler8_product(){
    // We have a digit variable to represent the 1000 digit number, an answer number representing the answer to be returned, and the
    // current_product variable represents the current 13 digit product.
    var digit = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
    var answer = 0;
    var current_product = 1;

    //Iterate from 0 to the length of the number minus 13, since we want to check 13 numbers in this 1000 digit number.
    for (var i = 0; i<digit.length - 13; i++){

        // We check from digit[i] to digit[i + 13] to get the 13 digits we will make the product of.
        for(var j = 0; j < 13; j++){
            // We first check if the current digit, digit[i+j], is 0. If it is, the product of the 13 digits is 0 so we can get a new 13 digits      
            // by incrementing i. Saves us from having to continuing the loop when the product will be 0.
            if (digit[i+j] == 0){
                break;
            } 
            else {
            // Otherwise, we multiply our current product by the current digit in the 13 digit number and continue our j loop.
              current_product *= digit[i+j];
            }
        }
        // After we have checked thirteen digits with j, we see if our current product is larger than our current answer, and if it is, we set
        // the answer to current_product.
        if (current_product > answer){
            answer = current_product;
        }
        // Current product should be 1 every time we want to find the next product of 13 digits.
        current_product = 1;
    }

    return answer;

}

function init(){
    var answer = document.getElementById("euler8");

    answer.innerHTML = "The answer is: " + euler8_product();
}

document = window.document;
window.onload = init;


