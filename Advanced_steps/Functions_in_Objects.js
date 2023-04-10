// Functions in objects are called Methods
const person = {
    age: 22, //32
    name: "Vlad",
    fortune: 0, // 10e10,
    married: true,
    kids: "three",
    bodyfat: 10,
    success () {
        return (this.fortune>10e6 && this.bodyfat<15)
    },
    musclemass: 55,
    jagged() { return (this.bodyfat < 15 && this.musclemass > 40) },
    // arrow functions and this:
    number_of_kids: () => {
        console.log(this)  // arrow functions don't change the this state 
        // so they are not used as objects' methods
        return this.kids
    }
};

console.log(person.success())
console.log(person.number_of_kids())

