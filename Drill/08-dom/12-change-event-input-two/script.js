// 08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)

let input = document.querySelector("#pass-one").addEventListener("keypress", () => {
    let select = document.querySelector("input");
    let minlength = select.setAttribute("minlength", 8);
    let inputValue = document.querySelector("#pass-one").value;
    let input = inputValue.length;
    let validator = document.getElementById("validity");
    if (!isNaN(inputValue.length >= 2)) {
        if (inputValue.length >= 7) {
            validator.innerText = "ok"
        }
    }
})