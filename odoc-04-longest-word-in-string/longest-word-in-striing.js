//Return the length of the longest word in the provided sentence.
function findLongestWordLength(str) {
    //1. split string 
    var sentenceToWord = str.split(" ");
    
    //------------Solution 1------------
    
    // var longerWord = sentenceToWord[0];
    
    // compare each words
    // for(var i = 1; i < sentenceToWord.length; i++) {
    //     //when i word is longer than i+1 then, str will be i
    //     if(longerWord.length > sentenceToWord[i].length) {
    //         longerWord = longerWord;
    //     }
    //     //when i word is shorter than i+1 then, str will be i+1
    //     else {
    //         longerWord = sentenceToWord[i]
    //     }

    //     //comparison should be with str not just with index
    // }
    
    // return longerWord.length;
    
    //------------Solution 2------------
    
    // var newArray = sentenceToWord.map(element =>  element.length);

    // return Math.max(...newArray);
    
    //------------Solution 3------------
    
    var maxLength = 0;
    
    for(var i = 0; i < sentenceToWord.length; i ++) {
        if(sentenceToWord[i].length > maxLength) {
            maxLength = sentenceToWord[i].length;
        }
    }
    
    return maxLength;
        
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));