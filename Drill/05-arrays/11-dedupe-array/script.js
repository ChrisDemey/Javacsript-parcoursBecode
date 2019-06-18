
// 05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    let unique = [...new Set(fruits)];
    console.log(unique);
})