// 05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau

let go = document.getElementById("run");
go.addEventListener("click", function (el) {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    for (i = 0; i < fruits.length; i++) {
        if (fruits[i] == "pomme") {
            console.log("oui");
            break;
        } else {
            console.log("non");
            break;
        }
    }
})