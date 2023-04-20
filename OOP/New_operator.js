// Constructor function
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// Update the prototype
Color.prototype.rgba = function (a=1.0) {  
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

// Things are still not grouped, bad syntax

const color1 = new Color(1, 2, 3); // here the constructor function is linked to the object
const color2 = new Color(100, 255, 255);

console.log("color.rgba", color1.rgba === color2.rgba);
document.body.style.backgroundColor = color2.rgba();