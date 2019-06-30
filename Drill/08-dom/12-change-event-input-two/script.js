// 08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)

///// Pas encore au point mais je peux y arriver par moi-même (au moins celui-là) /////

///// J'ai tenté de le refaire durant la journée de consolidation du 27/06 /////

const password = document.getElementById("pass-one");   // chercher l'ID pass-one
const count = document.getElementById("counter");       // chercher l'ID counter
const numbers = document.getElementById("counter");
let entry = "";                                         // variable vide (pour la chaine de caractères)

password.addEventListener("keypress", (event) => {      // ajouter évènement a password avec une interface event
    passLength = password.value.length;                 // variable length vaut la longueur des valeurs de password
    minNumbers = count.value;                           // variable minNumbers vaut la valeur de count
    if (passLength >= 8 && minNumbers == 2) {           // SI la longueur vaut 8 caractères et 2 chiffres
        event.preventDefault();                         // appeler méthode preventDefault, en gros ca stop la prise de nouveaux caractères
        count.innerText = `Ok`;                         // count change le html pour marquer Ok
    }
    else{
        count.innerText = `Pas Ok`;                     // SINON count change le html et marque Pas ok
    }
})