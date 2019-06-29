
// 05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau

let list = document.getElementById("run");
list.addEventListener("click", function () {
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
    document.getElementById('run').addEventListener('click', () => {
        const newTable = new Set (fruits);
        Array.from(newTable);
        console.log(newTable);
    })
})