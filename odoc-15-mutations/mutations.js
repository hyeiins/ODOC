// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
function mutation(arr) {
    // first thought
    // 1. separate all the letters 
    // let newArr = []
    // newArr.push(arr[0].toLowerCase().split(''), arr[1].toLowerCase().split(''))
    // // 2. filter the 2nd word with 1st wor
    // let filtered = newArr[1].filter(el => !newArr[0].includes(el))
   
    // console.log(filtered)
    // // 3. if filtered word length is 0, then true otherwise false
    // if(filtered.length > 0) {
    //     return false
    // }
    
    // return true
    
    // make it simpler
    
    //dont need to create another array
    let firstWord = arr[0].toLowerCase().split('');
    let secondWord = arr[1].toLowerCase().split('');
    
    let filtered = secondWord.filter(el => !firstWord.includes(el));
    
    if(filtered.length > 0) {
        return false
    }
    
    return true
}

console.log(mutation(["hello", "hey"]))
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["Noel", "Ole"]));