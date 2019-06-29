// 03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)

let color = ["blue","red","green","yellow","grey","orange"];            // créer variable avec un tableau qui contient plusieurs chaînes de caractères
let i = 0;                                                              // créer variable avec comme valeur 0
document.querySelector("button").addEventListener("click",function(){   // chercher la div "button" et y ajouter un évènement (au click) et y créer une fonction
    i = i < color.length ? ++i : 0;                                     // dans la fonction créer variable qui s'étends sur toute la variable color (en faire une boucle)
document.querySelector("body").style.background = color[i]              // chercher la div "body" et y changer le style du background en fonction de la variable color
})