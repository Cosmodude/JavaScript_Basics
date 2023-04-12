const form = document.querySelector("#tokens");

const token = document.querySelector("#token");
const amount = document.querySelector("#amount");
const check = document.querySelector('#check');

const data = {
}
for (let input of [token, amount, check]) {
    input.addEventListener('input', ({ target }) => {  // can use change event, differs a bit for text
        const { name, type, value, checked } = target;
        data[name] =  type === 'checkbox' ? checked : value;
    })
}
/*token.addEventListener('input', (e) => {
    data.token = e.target.value;
}) 

amount.addEventListener('input', (e) => {
    dataStruct.amount = e.target.value;
}) */

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Tokens transferred!");
    console.log("Checked ", check.checked)
    
})