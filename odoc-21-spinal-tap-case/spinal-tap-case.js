//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
    //split the word 
    //empty space or  _ or Capital letter can be a word to be splitted
    //join the words with "-"
    //convert to lowercase
    var regex = /\s|_|(?=[A-Z])/
    console.log(str.split(regex).join('-').toLowerCase() ) 
    
}
spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show")
spinalCase("thisIsSpinalTap")
spinalCase("AllThe-small Things")
spinalCase("Teletubbies say Eh-oh")