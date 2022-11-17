// Reverse the provided string.
function reverseString(str) {
    //1. split the string to individual letters and store it in array
    let newStr = str.split("");
    
    //2. reverse the array
    newStr.reverse();
    
    //3. join the items in the array
    str = newStr.join("");
    
    //4. return the full reversed string
    return str;
}

console.log(reverseString('abcde')) //returns edcba
console.log(reverseString('hyeiin')) //returns niieyh
console.log(reverseString('my name is hyeiin')) //returns iineyh si eman ym
console.log(reverseString('123')) //returns 321