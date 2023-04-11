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
const container = document.querySelector('#boxes');

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add("box")
    box.addEventListener('click', changeColor)
    container.appendChild(box);
};