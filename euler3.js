function prime_factors(num){
    var factors = [],
        d = 2,
        n = num;
    while (n > 1){
        while ((n % d) == 0){
            factors.push(d);
            n = parseInt(n/d);
        }
        d = d + 1;
        
    }
    console.log(factors);
    return factors;    
}

function init(){
    var answer =  document.getElementById("euler3"),
        factors = prime_factors(600851475143);

    answer.innerHTML = "The answer is: " + Math.max.apply(Math, factors);
}

document = window.document;
window.onload = init;
