//Convert Celsius to Fahrenheit
//function that accepts celsius temparature
function convertCtoF(celsius) {
    let fahrenheit;
    
    //temparature formula to convert celsius to fahrenheit
    fahrenheit = celsius * 9/5 + 32;
    
    return fahrenheit;
}

console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(0));
console.log(convertCtoF(20));
console.log(convertCtoF(30));