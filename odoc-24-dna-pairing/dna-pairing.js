// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

//The DNA strand is missing the pairing element. 
// Write a function to match the missing base pairs for the provided DNA strand. 
// For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    // //Create pair array 
    // let dnaPairs = [["G", "C"], ["C","G"], ["T", "A"], ["A", "T"]];
    
    // //split the string
    // let splitStr = str.split("");
    let pairedArr = [];
    
    // //loop through string array
    // for(var i = 0; i < splitStr.length; i ++) {
    //     //loop through dna pairs and check the first item of each array. 
    //     //if first item of dnaPair is same as splitStr, then push that dna pair in to paired Arr
    //     for(var j = 0; j < dnaPairs.length; j ++) {
    //         if(dnaPairs[j][0] == splitStr[i]) {
    //             pairedArr.push(dnaPairs[j])
    //         }
    //     }
    // }
    
    //Use hashtable
    let dnaPairs = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'T'
    }
    
    let splitStr = str.split("");
    
    pairedArr = splitStr.map(x => [x, dnaPairs[x]])
    
    return pairedArr;
}

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));