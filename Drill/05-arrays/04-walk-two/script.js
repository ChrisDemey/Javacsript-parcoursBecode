//05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)

let list = document.getElementById("run");
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
list.addEventListener("click", function(el) {
fruits.forEach(element => {
    console.log(element)})
    
});