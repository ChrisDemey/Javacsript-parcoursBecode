//04-dates/04-locale-date/script.js - 4.4: date textuelle

let divTarget = document.querySelector("target")
let days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
let month = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
let date = new Date();

function hours() {                      // fonction hours
    let date = new Date();              // chercher nouvelles données pour la date
    let hours = date.getHours();        // chercher l'heure grace a la variable date
    let minutes = date.getMinutes();    // chercher les minutes grace a la variable date
    if (minutes < 10)                   // si minutes est plus petit que 10
        minutes = "0" + minutes;        // alors afficher caractère "0" + minutes
    return hours + "h" + minutes;       // retourner hours + caractère "h" + minutes
}
let txt = days[date.getDay()] + " ";        // va chercher le jour de la semaine actuel
txt += date.getDate() + " ";                // va chercher la date actuelle
txt += month[date.getMonth()] + " ";        // va chercher le mois actuel
txt += date.getFullYear(); + " ";           // va chercher l'année actuelle

target.innerHTML = txt + " " + hours();     // affiche le tout dans cette div