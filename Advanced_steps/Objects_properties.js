const numbers = [1, 4, 67, 5, 4, 3, 89, 76, -1, 0, 45];
const words = ["asap", "thx", "rsvp"];
const data = {
    number: 32,
    string: "Vlad",
    fortune: 10e10,
    married: true,
    3: "three"
};

// Short-hand Properties

const getData = arr => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, currValue) => sum += currValue);
    const avr = sum / arr.length;
    return {
        max,
        min,
        sum,
        avr
    }
}
const dat = getData(numbers)
console.log(dat);

// Computed properties
const role = "host";
const name = "Josh";

const team = {
    [role]: name,
}
console.log(team);

const addProp = (obj, prop, val) => ({ ...obj, [prop]: val });
res = addProp(team, "revenue", 10e6);
console.log(res);