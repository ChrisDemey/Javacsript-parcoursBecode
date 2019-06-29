// 04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)

let doc = document.querySelector("target")
function heure() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 18) {
        target.innerHTML = ("Bonjour");
    } 
    else {
        target.innerHTML = ("Bonsoir");
    }
}
heure()