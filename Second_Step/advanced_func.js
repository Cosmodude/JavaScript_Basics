function add(x, y) {
    return x + y;
}

const multiply = function mult(a,b) {
    return a * b;
}
console.log(multiply(3,7));

function substract(x, y) {
    return x - y;
}

const operations = [multiply, add, substract];

for (let func of operations) {
    console.log(func(5,2));
}

const functions = {
    m: multiply,
}

function callNTimes(func, N) {
    for (let i = 0; i < N; i++) {
        func();
    }
}

function cry() {  // This is a Callback function
    console.log("AAAA");
}

//callNTimes(cry, 3);

function calculator(op,b) {
    return function func(x) {
        return operations[op](x, b);
    };
}

const a = calculator(1, 3)
console.log(a(-5));

function makeHasNFT(NFT) {
    return function func() {
        return NFT != null;
    }
}

const hasAxie = makeHasNFT("Axie"); 

setTimeout(hasAxie,5000)  // hasAxie is a callback function