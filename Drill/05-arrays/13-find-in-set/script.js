//05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    const people = new Set([
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
    console.log(people.size);
    console.log(people.has("Alexandre"));
})