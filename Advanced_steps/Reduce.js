// Returns a single value
    // gets a Callback function as argument, initialValue param can be specified
const numbers = [1, 4, 67, 5, 4, 3, 89, 76, -1, 0, 45];
const strangeNumber = numbers.reduce((total, currVal) => {
    return total + currVal;
}, -1000);  // initial value emphasized
console.log(strangeNumber)
/*  example:
     .reduce((tracker, curr_value) => {
        return accumulator + curr_value
    })
    */

const minNumber = numbers.reduce((min, currVal) => (Math.min(min, currVal)));