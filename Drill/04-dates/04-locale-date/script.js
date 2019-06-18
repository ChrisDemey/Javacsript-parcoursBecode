//04-dates/04-locale-date/script.js - 4.4: date textuelle

let doc = document.querySelector("target")
let jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
let mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
let date = new Date();

function heure() {
    let date = new Date();
    let heure = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;
    return heure + "h" + minutes;
}
let message = jours[date.getDay()] + " "; // nom du jour
message += date.getDate() + " "; // numero du jour
message += mois[date.getMonth()] + " "; // mois
message += date.getFullYear(); + " ";

target.innerHTML = message + " " + heure();