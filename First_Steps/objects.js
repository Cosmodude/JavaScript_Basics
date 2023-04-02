const data = {
    number: 32,
    string: "Vlad",
    fortune: 10e10,
    married: true,  
    3: "three"
}
console.log(data.string)
console.log(data[3])

let trait = "muscle mass";
const Vlad = {
    trait: 48,
    "muscle mass": 50
}
console.log(Vlad.trait)
console.log(Vlad[trait]) 
Vlad[trait] = 60;