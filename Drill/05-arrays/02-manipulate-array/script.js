//05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau

let go = document.getElementById("run");
go.addEventListener("click", function (el) {
    let fruits = [
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
    ];

    console.log(fruits);
    fruits.shift("pomme");
    fruits.pop("cerise");
    fruits.unshift("banane");
    fruits.push("kiwi");
    console.log(fruits);
})