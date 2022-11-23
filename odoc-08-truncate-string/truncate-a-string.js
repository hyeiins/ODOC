// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).  
// Return the truncated string with a ... ending.

const { string } = require("yargs");

function truncateString(str, num) {
    //check if str is longer than num
    let newString = str;
    
    //solution1 -------------------
    // if(str.length > num) {
    //     //if it is longer, truncate the sentence  
    //     var strForTrucate  = str.split("");
     
    //     strForTrucate.splice(num, strForTrucate.length - num);

    //     newString = strForTrucate.join("").concat('...');
    // }
    
    //solution2 -------------------
    if(str.length > num) {
        newString = str.slice(0, num).concat('...');
    }
    
    return newString;
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));