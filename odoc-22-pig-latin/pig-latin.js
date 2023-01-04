//Pig Latin is a way of altering English Words. The rules are as follows:

//- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

//- If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
    //1. define array of vowels
    var vowels = /[aeoiu]/;
    var wordToReturn;
    //3. split the word 
    //4. search first vowel from the word
    var firstVowel = str.split("").find(el => el.match(vowels));
    var indexOfFirstVowel = str.indexOf(firstVowel)
    
    //7. if first word is consonant just add 'way' at the end
    if(str[0].match(vowels)) {
        wordToReturn = str + "way"
    }
    else if (!str.match(vowels)) {
        //6. if no vowel, just add 'ay' at the end
        wordToReturn = str + "ay"
    }
    else {
        //5. move all the consonant before 4 to the end
        wordToReturn = str.slice(indexOfFirstVowel, str.length) + str.substr(0, indexOfFirstVowel)+ 'ay';
    }

    
    return wordToReturn
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("eight"))
console.log(translatePigLatin("schwartz"))
console.log(translatePigLatin("rhythm"))