// 08-dom/05-hover-image/script.js - 8.5: survol d'image

let img = document.querySelector("img");
let imgSrc= img.getAttribute('src');
let data = img.getAttribute('data-hover');

img.addEventListener("mouseover",function(event){
    img.src=data;
})
img.addEventListener("mouseout",function(event){
    img.src=imgSrc;
})
