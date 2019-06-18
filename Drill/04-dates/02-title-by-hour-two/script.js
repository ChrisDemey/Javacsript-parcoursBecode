
// 04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)

let doc = document.querySelector("target")

function heure() {
    let date = new Date();
    let heure = date.getHours();
    let minutes = date.getMinutes();
    if (heure < 17) {
        target.innerHTML = ("Bonjour"); 
    } else if (heure == 17) {
        if (minutes < 30) {
            target.innerHTML = ("bonjour");
        } else if (minutes >= 30) {
            target.innerHTML = ("Bonsoir");
        }
    } else {
        target.innerHTML = ("Bonsoir");
    }
}
heure()