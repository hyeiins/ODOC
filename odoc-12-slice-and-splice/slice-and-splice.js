//You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// 1. return examples
// [1, 2, 3], [4, 5, 6], 1 -> should return [4, 1, 2, 3, 5, 6]
// [1, 2, 3], [a, b], 1 -> should return [a, 1, 2, 3, b]
// [1, 2, 3], [a, b], 2 -> should return [a, b, 1, 2, 3]
// ['hello', 'world', 'Lorem', 'ipsum'], ['slice', 'and', 'splice'], 2 -> should return  ['slice', 'and', 'hello', 'world', 'Lorem', 'ipsum','splice']
function frankenSplice(arr1, arr2, n) {
    // 2. declare new array to store the final array
    // 3. When u copy the arr2, it should not change original arr2 - pass by reference
    // by converting arr2 to string first, it will copy the arr2 as  pass by value
    // and by converting back the string arr2 into json, it will go back to a array value
    // As arr2 is string, it will be passed by value and it will not affect to original arr2
    // when we change the value of new finalArr.
    let finalArr = JSON.parse(JSON.stringify(arr2));
    
    // 4. use splice without removing the existing elements
    // we need to spread the arr1 element rather than getting whole arr1 as it is.
    finalArr.splice(n, 0, ...arr1);
    
    return finalArr;
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
console.log(frankenSplice([1, 2, 3, 4], [], 0))