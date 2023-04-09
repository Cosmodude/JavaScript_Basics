const numbers = [1, 4, 67, 5, 4, 3, 89, 76, -1, 0, 45];
const words = ["asap", "thx", "rsvp"];
const data = {
    number: 32,
    string: "Vlad",
    fortune: 10e10,
    married: true,
    3: "three"
};

console.log(numbers.sort())  // returns the reference to the initial array

const asc_sorted_numbers = numbers.sort((a, b) => a - b)  // ascending order 
console.log(asc_sorted_numbers)  // reference to numbers
const desc_sorted_numbers = numbers.sort((a, b) => b - a)  // descending order 
// Pay attention!!!
console.log(asc_sorted_numbers)  // refrence to changed numbers
console.log(numbers)
// 3 variables point to the same array, 
// can be changed using.slice()
const badly_sorted_numbers = numbers.slice().sort() 
console.log(numbers)

const resObject = words.reduce((object, currValue, index) => {
    object["words"] += (currValue + " ");
    object["number"] = index;
    return object;
}, { words: ""})

console.log(resObject)