function cry() {  // This is a Callback function
    alert("AAAA");
}
//setTimeout(cry, 3000)

const btn = document.querySelector('button');
btn.addEventListener("click",cry)