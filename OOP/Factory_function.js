// Creates and returns the object
// objects follow same pattern 
function makeColor(r, g, b) {  // creates color
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {  // defines for every individual object
        const { r, g, b } = this;
        return `rgb${r}, ${g}, ${b}`;
    }
    return color;
}

const color1 = makeColor(0, 0, 0);
const color2 = makeColor(255, 255, 255);

console.log("color.rgb", color1.rgb === color2.rgb);
console.log("string.slice", "hi".slice === "bye".slice)

