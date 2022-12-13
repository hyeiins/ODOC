// Remove all falsy values from an array. Return a new array; 
// do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  // solution 1
  // filter the data that returns true and assign it to new variable
  // filter will create the new array so it will not affect to original array
  // var newarr = arr.filter(el => el ? true : false)
  
  // solution 2 
  var newarr = arr.filter(el => Boolean(el));
  
  return newarr;
}

console.log(bouncer([7, "ate", "", false, 9, null, 0]));