let j = 0; 
while (j <= 5) {
    // condition
    //console.log(j);
    j++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    guess = Math.floor(Math.random() * 10);
    console.log(guess)
}
console.log(`Guess is ${guess}`)