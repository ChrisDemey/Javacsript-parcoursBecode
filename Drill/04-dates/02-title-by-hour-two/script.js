
// 04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)

let doc = document.querySelector("target")

function heure() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 17) {
        target.innerHTML = ("Bonjour"); 
    } 
    else if (hours == 17) {
        if (minutes < 30) {
            target.innerHTML = ("bonjour");
        } 
        else if (minutes >= 30) {
            target.innerHTML = ("Bonsoir");
        }
    } else {
        target.innerHTML = ("Bonsoir");
    }
}
heure()