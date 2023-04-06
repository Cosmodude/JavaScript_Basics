// alternative function expression

const numbers = [1, 4, 67, 5, 4, 3, 89, 76 , -1, 0, 45];
const multiply = (n, m) => { 
    return n * m;
}
const square = n => {   // no parens 
    return n * n;
};

const cube = n => (  // no curli braces
    n * n * n 
);

const quadruple = n => n * n * n * n;  // no parens

const parityList = numbers.map(n => n % 2 === 0 ? "even": "odd");  // great oneliner
console.log(parityList);
