// Given a positive integer num, return the sum of all odd Fibonacci numbers 
// that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. 
// Every additional number in the sequence is the sum of the two previous numbers. 
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
// less than or equal to 10 are 1, 1, 3, and 5.

// fibonacci
// n:  0 1 2 3 4 5 6 7  8  9  10
// fn: 0 1 1 2 3 5 8 13 21 34 55

function sumFibs(num) {
    let n1 = 0;
    let n2 = 1;
    let sum = 0;

    let latest = 0;
    let fibarr = [n1, n2];
    
    // n2 is the bigger number and the while loop should 
    // loop for smaller number of times than num argument.

    while(n2 <= num) {
        // this will push current fibonacci
        fibarr.push(n2)

        // add all the odd number under the given number
        if(n2 % 2 != 0) {
            sum = n2 + sum;
        }

        // latest is the next fibonacci number
        latest = n1 + n2;
        // swap first number to n2
        n1 = n2;
        // change second number to latest
        n2 = latest;
        
    }

    return sum;
    // normal fibonacci
    //for(var i = 0; i < num; i ++) {
    //     latest = n1 + n2;
    //     n1 = n2;
    //     n2 = latest;
    // }

    // console.log(fibarr)
}
  
sumFibs(4);
