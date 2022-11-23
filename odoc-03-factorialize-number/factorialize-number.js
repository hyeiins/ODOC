// Return the factorial of the provided integer.
function factorialize(num) {
    
    // Solution 1 --------------

    // 1. What is Fanctorial?
    // n! = n * (n-1) * (n-2) * .... * 1
    // 3! = 3 * 2 * 1
    // 4! = 4 * 3 * 2 * 1
    let result = 1;
    
    // // if num is 0, for loop is not running as state becomes false.
    // // Loop through from 2 as result is already initialized as 1.
    // for(let i = 2; i <= num; i++) {
    //     result *= i;
    // }
    
   
    
    // Solution 2 --------------
    // User recursive
    // 1. reduce number to 0
    // 2. stops recursive loop when number reaches 0
    // 3. when number is 0 it should return always 1

    if(num > 0) {
        //first recursive: 5 * factorialize(4)
        //second recursive: 5 * (4 * factorialize(3))
        //third recursive: 5 * 4 * (3 * factorialize(2))
        //fourth recursive: 5 * 4 *  3 * (2 * factorialize(1))
        //fifth recursive: 5 * 4 * 3 * 2 (1 * factorialize(0))
        // loop will stop when num reaches 0 and it will return result

        result = num * factorialize(num - 1);
    }
    
    // 2. return the number
    return result;
}
  
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
console.log(factorialize(3));