// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel

const gallery = [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg",
];

let img = document.querySelector("img");
let imgSrc = img.getAttribute('src');
let next = document.getElementById("next");
next.addEventListener("click", function (el) {
    let random = gallery[Math.floor(Math.random() * gallery.length)]
    img.setAttribute('src', random);
})