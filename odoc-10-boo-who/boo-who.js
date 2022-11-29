// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    // solution 1 ---------------------
    // if(bool === true || bool === false) {
    //     return true
    // }
    // return false;
    
    // solution 2 ---------------------
    // return bool === true || bool === false
    
    // solution 3 ---------------------
    return typeof bool == "boolean"
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));