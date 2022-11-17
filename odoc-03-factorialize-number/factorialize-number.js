// Return the factorial of the provided integer.
function factorialize(num) {
    // 1. What is Fanctorial?
    // n! = n * (n-1) * (n-2) * .... * 1
    // 3! = 3 * 2 * 1
    // 4! = 4 * 3 * 2 * 1
    let result = 1;
    
    // if num is 0, for loop is not running as state becomes false.
    // Loop through from 2 as result is already initialized as 1.
    for(let i = 2; i <= num; i++) {
        result *= i;
    }
    
    // 2. return the number
    return result;
}
  
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
console.log(factorialize(3));