//03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)

function changecolor(id) {                                                  // créer fonction "changecolor" et appeler les id
    document.body.style.backgroundColor = document.getElementById(id).id;   // la couleur de fond du body devient ce que la fonction va appeler en allant chercher l'élément id
}
