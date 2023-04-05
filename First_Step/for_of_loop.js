const data = {
    number: 32,
    string: "Vlad",
    fortune: 10e10,
    married: true,  
    3: "three"
}
let rare = new Array(1, 2, 34, 5);

for (let n of rare) {
    console.log(n);
}
for (let n of Object.keys(data)) {
    console.log(n);
}
for (let n of Object.values(data)) {
    console.log(n);
}