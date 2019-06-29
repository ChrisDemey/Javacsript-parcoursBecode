// 04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge

let date = new Date()                                           // appelle une donnée date
let currentYear = date.getFullYear()                            // appelle l'année actuelle via la variable date
let currentMonth = date.getMonth()                              // appelle le mois actuel via la variable date
let currentDay = date.getDate()                                 // appelle le jour actuel via la variable date
let btn = document.getElementById("run")                        // va chercher l'id "run"
btn.addEventListener("click", () => {                           // ajoute un évènement (au click) a l'id "run"
    let day = document.getElementById("dob-day").value          // va chercher la valeur de l'id "dob-day" 
    let month = document.getElementById("dob-month").value      // va chercher la valeur de l'id "dob-month" 
    let year = document.getElementById("dob-year").value        // va chercher la valeur de l'id "dob-year" 
    let age = currentYear - year - 1                            // cette variable a pour valeur l'année actuelle - l'année qu'on a entrer - 1 (sinon le résultat sera plus grand de 1)

    if (currentMonth == month) {            // si le mois actuel vaut le mois entré
        if (currentDay >= day) {            //  dans cette même condition: si le jour actuel vaut ou est plus grand que le jour entré
            age++                           // ajouter a la variable age
        }
    } 
    else if (currentMonth > month) {        // ou bien si le mois actuel est plus grand que le mois entré
        age++                               // ajouter a la variable age
    }

    alert('Voici votre âge: ' + age);       // afficher le résultat dans une boite de dialogue (alert)
})