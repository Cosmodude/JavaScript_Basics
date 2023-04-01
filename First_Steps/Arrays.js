// Creating
let regrets = [];
let miscellaneous = ["Andy", 0, null, true];
let rare = new Array(1, 2, 34, 5);
const immutable = ["Vlad"]
// Acessing and Modifying
console.log(rare[2]);

console.log(rare[-1]); // doesn't work

rare[5] = 3;  // will create an empy item 
console.log(typeof (rare[4]));  // of type undefined
console.log(rare);
rare[rare.length] = 90;
immutable[1] = "only";  // works
immutable[1] = "is";  // works
console.log(immutable);

// Methods

// Push and Pop
console.log("Main methods start");
let number = rare.pop();  // mutates the array
console.log(number);
console.log(rare);
console.log(rare.push("Vlad"));  // returns length of array
console.log(rare);
immutable.push("Vlad");  // works


// Shift and Unshift  (beggining analogues of push and pop)
rare.unshift("beginning","second el");  // adds to the beginning
console.log(rare);
console.log(rare.shift());  // cuts the beginning
console.log(rare);

console.log("Additional methods start");
// Concat 
let new_array = rare.concat(miscellaneous, regrets);  // merges the arrays

// Includes and Indexof

console.log(rare.includes(2, 3),); // search beggins from el with index 3
// returns boolean
console.log(rare.indexOf(2,2)); // search beggins from el with index 2
// returns index of element

// Slice 
let sliced = new_array.slice(0, rare.length);
console.log(sliced);
sliced = new_array.slice(-miscellaneous.length);
console.log(sliced);
sliced = new_array.slice();  // returns the original array

// Splice (removes/replaces/adds el)  
// second arg is number of el to delete

rare.splice(1, 0, "splice");  //  add element
rare.splice(0, 1);  // delete element
console.log(rare);

// Sort (sorts as strings)
rare.sort();
console.log(rare);  // works strange

// Reference types (doesn't work with "=", since it reassigns the data location)

console.log("Reference");
let ref = rare;
rare.splice(0,5);
console.log(ref);
immutable = []; // throws error





