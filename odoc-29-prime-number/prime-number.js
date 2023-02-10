// A prime number is a whole number greater than 1 with exactly two divisors: 
// 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. 
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers 
// that are less than or equal to num.

function sumPrimes(num) {
    // function to check whether the single number is prime
    function isPrime(num) {
        // the number just need to check whether the number below square root of number 
        // will have no remainders
        // if it has remainder, it will return the true, 
        // and if it does not have remainder, it will return the false
        const sqrt = Math.sqrt(num);

        // loop through numbers below the square root number 
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let sum = 0;

    //loop through all the numbers under given num
    for(var i = 2; i <= num; i ++) {
        // if each number is returning true, then, it will sum the value of i
        if(isPrime(i)) {
            sum = sum + i;
        }
    }
    return sum;
}


sumPrimes(10);