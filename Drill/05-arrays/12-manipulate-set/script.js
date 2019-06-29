// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set

let list = document.getElementById("run");
list.addEventListener("click", function () {
    const fruits = new Set([
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]);
    fruits.delete("pomme"); fruits.delete("cerise");    // effacer pomme et cerise de l'array
    fruits.add("banane"); fruits.add("kiwi");           // ajouter banane et kiwi à la fin de l'array
    console.log(fruits);
})