//04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    let date = new Date(document.getElementById("year").value);
    let Day = date.getDay();
    let Month = date.getMonth();
    let endDate = new Date(date)
    endDate.setFullYear(endDate.getFullYear() + 1);

    while (date < endDate) {
        date.setDate(date.getDate() + 1)
        if (date.getDay() == 5 && date.getDate() == 13) {
            console.log(date);
        }
    }
})