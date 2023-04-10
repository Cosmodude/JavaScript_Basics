// Functions in objects are called Methods
const person = {
    age: 32,
    name: "Vlad",
    fortune: 0, // 10e10,
    married: true,
    3: "three",
    bodyfat: 10,
    success () {
        return (this.fortune>10e6 && this.bodyfat<15)
    },
    musclemass: 55,
    jagged() {return(this.bodyfat<15 && this.musclemass>40)}
};

console.log(person.success())