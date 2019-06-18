/* Exercice 1 */
let blue = document.querySelector("body"); /* sélectionne body (en faire une variable) */
blue.classList.remove("bg-aqua"); /* utilise la variable et retire la classe */
blue.classList.add("bg-olive"); /* utilise la variable blue et ajoute la classe */

let grayaqua = document.getElementById("first-paragraph");
grayaqua.classList.remove("bg-lime", "gray");
grayaqua.classList.add("aqua");

let color = document.getElementsByClassName("bg-silver");
for (let i = 0; i < color.length; i++) {
    /* i=0 est la base. i<color.length est que i va jusqu'au bout du tableau. i++ est plusieurs ajouts */
    color[i].classList.add("bg-teal");
    color[i].classList.remove("bg-silver")
};

let block = document.getElementsByTagName("blockquote");
block[0].classList.add("bg-white");


/* Exercice 2 */
let table = document.querySelector("#my-table");
table.classList.add("bg-purple");

let ombre = document.querySelectorAll(".container>p");
for (let i = 0; i < ombre.length; i++) {
    ombre[i].classList.add("shadow");
}


/* Exercice 3 */
let couleur = document.getElementsByTagName("pre");
for (let i = 0; i < couleur.length; i++) {
    couleur.style.backgroundColor="green";
}

/* Exercice 4 */
let bouc = document.getElementsByClassName("bg-fuchsia");
while (bouc.firstChild){
    bouc.removeChild(bouc.firstChild);
};