// Add find, filter, every later
const words = ["asap", "thx", "rsvp"];

const oneStartsWith_r = words.some(word => word[0] === "r");
console.log(oneStartsWith_r);
const allEndsWith_r = words.every(word => word[word.length -1] === "r");
console.log(allEndsWith_r);
