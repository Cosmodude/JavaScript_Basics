//alert("Hi");
function set_number() {  // func declaration
    let index = 5;
    let numb = Math.pow(index, Math.round(5 * Math.random()))
    let s = `number is ${numb}`;
    return s;
}
//console.log(s);
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(parseFloat(reverseString(set_number())));
console.error('Work Harder!!!');