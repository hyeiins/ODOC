// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 
// because once the array has been sorted it will look like [3,5,20] 
// and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    //1. sort the array first
    // .sort will sort by digit, so 10 will come before 3 which is not what we want
    // code to sort arr elements

    // 1. sort with compare function
    arr.sort(function(a, b){
        return a-b
    });
    
    // 2. loop through array and find the number to fit in
    // if num is bigger than arr[0] and still bigger than arr[1] then index up
    // if num is bigger than arr[1] and still bigger than arr[2] then index up
    // if num is bigger than arr[2] and now smaller than arr[3] then place num in the smaller index without replacing it
    // if num is smaller than arr[0] num should be placed on arr[0]
    // if num is same as any of the value, it should be place before the same one.
    
    // getting the array it self
    // var maxNum = arr[0];
    
    // if(arr.length == 0) {
    //     arr.push(num)
        
    //     return num
    // }
    
    // for(var i = 0; i < arr.length; i ++) {
    //     if(num <= maxNum) {
    //         arr.splice(i, 0, num)
    //         return arr
    //     }
    //     else if(num > arr[arr.length-1]) {
    //         arr.push(num)
            
    //         return arr
    //     }
    //     else {
    //         maxNum = arr[i+1];
    //     }
    // }
    
    //refactor 1

    // for(var i = 0; i < arr.length; i ++) {
    //     if(num <= arr[i]) {
    //         arr.splice(i, 0, num)
    //         return arr
    //     }
    // }
    
    // arr.push(num)
            
    // return arr

    // getting the index of inserted numb
    // var getIndex = 0;

    // for(var i =0; i < arr.length; i++) {
    //     if(num <= maxNum) {
    //         getIndex = i
    //         return getIndex
    //     }
    //     else if(num > arr[arr.length-1]) {
    //         getIndex = arr.length 
            
    //         return getIndex
    //     }
    //     else {
    //         maxNum = arr[i+1];
    //     }
    // }
    
    // refactor getting index
    
    for(var i = 0; i < arr.length; i++) {
        if(num <= arr[i]) {
            return i
        } 
    }
    
    return arr.length;
}

console.log(getIndexToIns([40, 60], 50)); //should return 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) //should return 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) //should return 2
console.log(getIndexToIns([3, 10, 5], 1) )//should return 0
console.log(getIndexToIns([5, 3, 20, 3], 5)) //should return 2
console.log(getIndexToIns([2, 20, 10], 19)) //should return 2
console.log(getIndexToIns([2, 5, 10], 15)) //should return 3
console.log(getIndexToIns([], 1))//should return 0