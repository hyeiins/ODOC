//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
//Remove all elements from the initial array that are of the same value as these arguments.

//Note: You have to use the arguments object.

//argument object is local variable available for the functions
//The arguments object is useful for functions called with more arguments than they are formally declared to accept, called variadic functions, such as Math.min(). 


function destroyer(arr) {
    // loop throuh arguments from 1 to the length
    // search items in arr and filter it if it has same item as arguments
    for(var i = 1; i < arguments.length; i++) {
        arr = arr.filter(el => el != arguments[i]);
    }
    
    return arr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));