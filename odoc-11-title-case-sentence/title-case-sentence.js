// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

const { getOuterBindingIdentifiers } = require("@babel/types");

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    //1. split the sentences in to word
    var words = str.split(" ");

    //2. get the first letter of each element
    var newArr =[]
    
    for(var i = 0; i < words.length; i ++){
        //reset rest when loop moves on to next word 
        var rest = "";
        var firstLetter = ""; 
        
        //3. turn first letter in to uppercase
        firstLetter = words[i][0].toUpperCase();
        
        //4. turn rest of the letter into lower case
        for (var j = 1; j <words[i].length; j ++) {
            rest += words[i][j].toLowerCase();
        }
        
        newArr.push(firstLetter + rest);
    }
    
    //5. join and return the string
    return newArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
