class Color {
    constructor(r,g,b,name=""){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgba(a=1){
        return `rgb(${this.innerRGB}, ${a})`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    greet() {
        console.log("HI!!!");
    }
}

const c1 = new Color(0, 0, 0);
const white = new Color(255, 255, 255, "White");
console.log("white", white);

class Animal{
    constructor(name="Tom", age=3) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("Is eating")
        this.fed = true;
    }
}

