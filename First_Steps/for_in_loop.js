const data = {
    number: 32,
    string: "Vlad",
    fortune: 10e10,
    married: true,  
    3: "three"
}
// iterates over keys by default (takes only objects)
for (let key in data) {
    console.log(key);
}
// order of looping can vary