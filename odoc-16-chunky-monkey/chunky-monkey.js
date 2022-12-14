// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    // 1. slice the array according to the size 0-2/ 2-4/ 4-6
    let newArr = [];
    // 2. increase i by size
    // 3. cut the array and push it to newArr according to size 
    // if size is 3, it will slice the array from 0-3(not inclusive 3) and then i will be increase to 3 so starting index will be 3(Fourth)
    // it will slice the array from 3-6(not inclusive 6)
    for(var i = 0; i < arr.length; i = i+size) {
        newArr.push(arr.slice(i, i+size))
    }
    
    return newArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)