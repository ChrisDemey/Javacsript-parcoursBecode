// 04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge

let day = document.getElementById("dob-day").value;
let month = document.getElementById("dob-month").value;
let year = document.getElementById("dob-year").value;
let date = new Date();
let actualDay = date.getDate();
let actualMonth = date.getMonth();
let actualYear = date.getFullYear();
let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    let result = (actualYear - year);
    if (month > actualMonth) {
        result--
    }
    alert(result);
})
