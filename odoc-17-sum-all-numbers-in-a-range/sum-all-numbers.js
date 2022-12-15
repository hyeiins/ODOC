// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    //1. sort the array first
    // let sortedArr = arr.sort(function(a,  b){
    //     return a-b
    // })
    // let initial = 0;
    // //2. loop through the numbers in between and return the sum
    // for(var i = sortedArr[0]; i <= sortedArr[1]; i++) {
    //     initial = initial + i; 
    // }
    // return initial;
    
    //2
    // 1. get minimum and maximum value of the array values
    let maxNum = Math.max(arr[0], arr[1])
    let minNum = Math.min(arr[0], arr[1])
    
    let initial = 0;
    for(var i = minNum; i <= maxNum; i++) {
        initial = initial + i; 
    }
    
    return initial;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));