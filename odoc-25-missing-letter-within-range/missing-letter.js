//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    var alphabets ='abcdefghijklmnopqrstuvwxyz';
    
    //1. get substring from alphapbets by getting first letter and last letter of str
    let getIndexOfStartLetter = alphabets.indexOf(str[0])
    let getIndexOfLastLetter = alphabets.indexOf(str[str.length-1])
    
    let range = alphabets.substring(getIndexOfStartLetter, getIndexOfLastLetter+1);
    
    //2, compare the substring and str
    if(str.length != range.length) {
        let missingstring = range.split("").filter(el => !str.split("").includes(el));
         //3. get missing letters
        return missingstring[0]
    }
    
    return undefined;
   
}

console.log(fearNotLetter("abde"));