// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    
    
    // solution1 ----------------------
    var newStr = "";
    // if(str != "" && num > 0) {
    //     for(var i = 1; i <= num; i++){
    //         newStr = newStr.concat(str)
    //     }
    // }
    
    // solution2 ----------------------
    // if(str != "" && num > 0) {
    //     for(var i = 1; i <= num; i++){
    //         newStr += str;
    //     }
    // }
    
   
    
    // solution3 ----------------------
    // recursive 
    // 1. reduce the num before reachs 0 when recursive happens
    // 2. concat the string when recursive happens
    
    if(num >= 1){
        // num 3 will return abc + repeatStringNumTimes("abc", 2)
        // num 2 will return abcabc + repeatStringNumTimes("abc", 1)
        // num 1 will return abcabcabc ++ repeatStringNumTimes("abc", 0)
        // loop will stop when num reaches 0 so it will return newStr
        newStr =  str + repeatStringNumTimes(str, num - 1);
    }

    return newStr;
}

console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));