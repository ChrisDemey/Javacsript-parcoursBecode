//05-arrays/01-get-element/script.js - 5.1: élément de tableau

let go = document.getElementById("run");
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
go.addEventListener("click", function(el) {
    alert (fruits[3]);
})