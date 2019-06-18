//05-arrays/03-walk-one/script.js - 5.3: parcours de tableau (1)

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
    for (let valeur of fruits) {
        console.log(valeur);
    }
})