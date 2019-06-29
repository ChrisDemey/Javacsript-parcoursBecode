// 02-maths/05-factorial/script.js - 2.5: Factorielle


//to get the value of an input: document.getElementById("element-id").value
document.getElementById("run").addEventListener("click", () => {
    let input = document.getElementById('number').value;
    let factorial = 1;
    for (let i = inputed; i > 0; i--) {
        factorial = factorial * i;
        console.log(factorial);
    }
});