// 08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)

let input = document.querySelector("#pass-one").addEventListener("input", () => {
    let select = document.querySelector("input");
    let max = select.setAttribute("maxlength", 10);
    let inputValue = document.querySelector("#pass-one").value;
    let input = inputValue.length;
    let counter = document.getElementById("counter");
    counter.innerText = inputValue.length + "/10"
    console.log(input)
})