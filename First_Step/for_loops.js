for (let i = 0; i < 10; i += 1)
//   initial exp; condition; increment exp
{
    i++;
}

const rare = new Array(1, 2, 34, 5);
for (let i = 0; i < rare.length; i++){
    console.log(i, rare[i]);
}

const str = "desserts";
let reverse = "don't be ";
console.log(reverse);
for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i];
    console.log(reverse);
}
console.log(reverse);
