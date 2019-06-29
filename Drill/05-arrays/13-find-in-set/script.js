//05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set

let list = document.getElementById("run");
list.addEventListener("click", function (el) {
    const names = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    console.log(names.size);                // affiche le nombre d'éléments de l'array names
    console.log(names.has("Alexandre"));    // affiche true ou false suivant si l'élément Alexandre fait partie ou non de l'array
})