// Array callback methods (run once per element of array)
const numbers = [1, 4, 67, 5, 4, 3, 89, 76, -1, 0, 45];
const words = ["asap", "thx", "rsvp"];
const print = numbers.forEach(function (n, index) { // you can capture the index
    return (index, n);  // void, doesn't return anything
});
console.log(print);

const square = function (n) {
    //console.log(n * n);
    return n * n;
}
//numbers.forEach(square)

const square_numb = numbers.map(square);  // returns anything, usually an array

const isEven = function (n) {
    return {
        numb: n,
        isEven: n % 2 === 0
    }
};
const numDetail = numbers.map(isEven);
//console.log(numDetail)

const words2 = words.map(function (word) {
    return word.toUpperCase().split().join(".");
});