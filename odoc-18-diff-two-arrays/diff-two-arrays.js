// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    //use filter to filter the both array against each other
    let newArr = [];
    
    //leave only the arr1 element that does not exists in arr2
    let onlyinarr1 = arr1.filter(el => !arr2.includes(el));
    
    //leave only the arr2 element that does not exists in arr1
    let onlyinarr2 = arr2.filter(el => !arr1.includes(el));
    
    //push the both filtered array using spread syntax
    newArr.push(...onlyinarr1, ...onlyinarr2);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"])