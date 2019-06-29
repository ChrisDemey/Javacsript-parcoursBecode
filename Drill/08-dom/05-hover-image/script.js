// 08-dom/05-hover-image/script.js - 8.5: survol d'image

let image = document.querySelector("img");
let imgSrc= image.getAttribute("src");
let data = image.getAttribute("data-hover");

image.addEventListener("mouseover",function(){
    image.src=data;
})
image.addEventListener("mouseout",function(){
    image.src=imgSrc;
})
