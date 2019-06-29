// 03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)

let click = document.querySelector("#run");     // créer variable qui va chercher l'id "run"

click.addEventListener("click", function () {                   // créer évènement (au click) et y créer une fonction
    let changecolor = document.getElementById("color").value;   // créer variable "changecolor" qui va chercher l'id "color"
    console.log(changecolor);                                   // afficher dans la console la variable "changecolor"
    document.body.style.backgroundColor = changecolor;          // dans le body, changer la couleur de fond grâce à la variable "changecolor"
})