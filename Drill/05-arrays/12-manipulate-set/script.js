// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
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
    fruits.delete("pomme");
    fruits.delete("cerise");
    fruits.add("banane");
    fruits.add("kiwi");
    console.log(fruits);
})