//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
//This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
    //loop through array element and pass it as the parameter
    for (var i = 0; i < arr.length; i++) {

        if(func(arr[i])) {
          return arr[i]
        }
    } 
    
    return undefined;
}

console.log(findElement([1, 8, 1, 2], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));