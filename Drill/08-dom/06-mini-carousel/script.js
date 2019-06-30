// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel

///// Refait durant la journée de consolidation du 27/06 /////

const gallery = [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg",
];

let i = 0;

function changeIcon() {
    document.querySelector("img").src = gallery[i];     // chercher l'élément img, précisément l'élément src
    if (i < gallery.length - 1) {                       // condition avec boucle dedans, sur la longueur de toutes les images
        i++;
    } 
    else {                                              // sinon
        i = 0;                                          // la variable vaut 0
    }
}
document.getElementById("next").addEventListener("click", () => {   // chercher l'élément next et y ajouter un évènement au click
    changeIcon();                                                   // appeler la fonction changeIcon
})