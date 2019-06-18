// 08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément

let source = document.getElementById("source");
let attribute = source.getAttribute("data-image");

let target = document.getElementById("target");
let balise = document.createElement("img");

target.innerHTML= balise + attribute;
let remove= document.getElementById("source").remove();