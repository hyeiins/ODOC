// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. 
// For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
    //convert first letter of after to upper or lower case according to before 
    if(before[0].match(/[A-Z]/)) {
        after = after[0].toUpperCase() + after.slice(1)
    }
    else {
        after = after[0].toLowerCase()+ after.slice(1)
    }
    
    //replace the word - only searchs first expression found
    // let newstr = str.replace(find, after) 

    //refactored to find duplicated words
    let newstr = str.replace(new RegExp(before, 'g'), after) 
   
    return newstr;
}

console.log(myReplace("A quick brown fox jumped over the jumped dog", "jumped", "leaped"));

