//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member 
//with array syntax arr[i].

function largestOfFour(arr) {
    // solution 1 ----------------------
    // // loop through outer array
    // let groupOfBiggestNumbers = [];
    
    // for(var i = 0; i < arr.length; i++) {
    //     var biggestNum = Math.max(...arr[i])
        
    //     groupOfBiggestNumbers.push(biggestNum)
    // }
    
    // // get the biggest number of from subarray
    // return groupOfBiggestNumbers;
    
    // solution 2 ----------------------
    var newArr = arr.map((el) => Math.max(...el));

    return newArr
}


  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));