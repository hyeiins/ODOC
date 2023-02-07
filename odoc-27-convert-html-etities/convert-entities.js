// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.

function convertHTML(str) {
    // break the string
    let strToLetter = str.split("");
    // replace it in cases
    
    let newStr = [];

    for(var i = 0; i < strToLetter.length; i++) {
        newStr.push(convertToEntity(strToLetter[i]));
    }

    return newStr.join("");
}

function convertToEntity(char) {
    var entity;

    switch (char){
        case "&":
            entity = "&amp;";
            break;
        case "<":
            entity = "&lt;";
            break;
        case ">":
            entity = "&gt;";
            break;
        case "'":
            entity = "&apos;";
            break;
        case '"':
            entity = "&quot;";
            break;

        default:
            entity = char;
    }

    return entity;
}
  
console.log(convertHTML('Dolce & Gabban'));

