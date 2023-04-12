const colors = [
    "green",
    "red",
    "blue",
    "white",
    "orange",
    "yellow"
]
const changeColor = function () {  // change color of Header
    this.innerText = this.style.backgroundColor;
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
}
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function () {
    console.log(this.innerText);
}
)
const container = document.querySelector('#boxes');

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add("box")
    box.addEventListener('click', changeColor)
    container.appendChild(box);
};

const input = document.querySelector("#username"); 

input.addEventListener("keydown", function (e) {  // any time you press a keyboard
    console.log(e);
})

const users = document.querySelector("#items");
input.addEventListener('keypress', function (e) {  // when you type in symbols
    console.log(e.key);
    if (e.key === "Enter") {
        if (!this.value) { return; };
        const newUser = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newUser;
        users.appendChild(newItem);
        this.value = '';
    }
})

