//09-misc/01-waving-text/script.js - 9.1: effet vague

let target = document.getElementById("target");     // chercher l'ID target
let arrText = target.textContent;                   // chercher le contenu texte de l'ID target
let fontSizes = [1, 1.5, 2, 2.5, 3];                // créer un array avec des valeurs (tailles du texte)
let wave = 0;                                       // variable avec 0 comme valeur
let i = 1;                                          // variable avec 1 comme valeur
target.innerHTML = null;                            // cibler le html et que ça soit Null
for (el of arrText) {                               // boucle des éléments de la variable arrText
    const span = document.createElement("span");    // variable qui créée un élément span
    const textNode = document.createTextNode(el);   // variable qui créée un noeud de texte
    span.appendChild(textNode);                     // élément span créé et lui mettre le noeud de texte créé
    span.style.fontSize = fontSizes[wave] + 'em';   // prendre la taille du texte de span, y mettre la variable wave + em
    target.appendChild(span);                       // mettre span dans l'ID target
    if (wave === fontSizes.length - 1) {            // SI wave est strictement équivalent a la longueur de fontSizes - 1
        i = -1;                                     // enlever 1 a la valeur de i
    } 
    else if (wave === 0) {                          // SINON SI wave est strictement équivalent a 0
        i = 1                                       // i a comme valeur 1
    }
    console.log(i);                                 // afficher dans la console i
    wave += i;                                      // ajouter i a wave, ce qui concluera la boucle de la vague
}