const btn2 = document.querySelector('#Clicker');
const btn1 = document.querySelector('button');

btn1.onclick = () => { console.log("clicked1") }
btn1.ondblclick = () => { console.log("doubleclicked1") }

// Using addEventListener
btn2.addEventListener('mouseover', () => {
    btn2.innerText = "stop tuching";
})
btn2.addEventListener('mouseout', () => {
    btn2.innerText = "Clicker";
})
window.addEventListener('scroll', () => {
    console.log("stop");
})