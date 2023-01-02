//Make a function that looks through an array of objects (first argument) 
//and returns an array of all objects that have matching name and value pairs (second argument). 
//Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

//For example, if the first argument is 
//[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
//and the second argument is { last: "Capulet" },
//then you must return the third object from the array (the first argument), 
//because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    var newArr =[];
    
    //Loop through collection
    for(var i = 0; i < collection.length; i ++) {
        var sameValue = true;
        //loop through source and compare the key and value with collection
        //for.. in can stop the loop when there are matching condition
        //So if you find all the key value pair existing in the collection, then loop can be stopped
        for(const key in source) {
            if(collection[i][key] !== source[key]) {
                sameValue = false;
                break;
            }
        }
        
        //only add the collection that does have same key value pair 
        if(sameValue) {
            newArr.push(collection[i])
        }
    }

    return newArr
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 },  { "apple": 1, "cookie": 2 , "bat": 2}], { "apple": 1, "bat": 2 })