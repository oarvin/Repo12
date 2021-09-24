/* function sumFibonacci (num) {
    /* if ( num < 0) return 0;
    
    var prev = 1;
    var curr = 1;

    for(var i = 2; i < num; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
} */
    /* if(num < 3) return 1;
    return sumFibonacci(num-1) + sumFibonacci(num-2);
} */


function sumFibonacci (num) {
    
    if ( num <= 0) return 0;
    if ( num == 1) return 1;
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i<= num; i++) {
        fib[i] = fib[i - 2] + fib[i -1];
    }
    
    var sumOdd = 0;
    for (i = 0; i < num; i++) {
        if (fib[i]%2 != 0 && fib[i]<num) {
            sumOdd += fib[i];
        }

    }

    return sumOdd;
}


console.log(sumFibonacci(1)); 
console.log(sumFibonacci(10)); 
console.log(sumFibonacci(20)); 
console.log(sumFibonacci(5)); 
console.log(sumFibonacci(0)); 
module.exports = sumFibonacci;