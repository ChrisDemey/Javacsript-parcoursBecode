// 08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)

///// Refait durant la journée de consolidation du 27/06 /////

///// Possibilités de simplifier le code ? /////

const password = document.getElementById("pass-one");   // chercher l'ID pass-one
const count = document.getElementById("counter");       // chercher l'ID counter
let entry = "";                                         // variable vide (pour la chaine de caractères)

password.addEventListener("keypress", (event) => {      // ajouter évènement a password avec une interface event
    length = password.value.length;                     // variable length vaut la longueur des valeurs de password
    if (length == 10) {                                 // SI la longueur vaut 10 caractères
        event.preventDefault();                         // appeler méthode preventDefault, en gros ca stop la prise de nouveaux caractères
    }
})
password.addEventListener("keyup", () => {         // ajouter évènement a password avec une interface event
    entry = password.value.length;                      // entry vaut la longueur des valeurs de password
    count.innerText = `${length}/10`;                   // count et innerHTML change le html pour mettre le nombre de caractères entrés sur 10 (Ex: 0/10, 1/10, 2/10, ...)
})
