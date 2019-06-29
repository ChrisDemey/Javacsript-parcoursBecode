// 08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément

let value = document.getElementById("source");      // chercher l'ID source
let image = document.createElement("img");          // créer élément img (balise html)
let target = document.getElementById("target");     // chercher l'ID target
let attribute = value.getAttribute("data-image");   // mettre data-image a la variable value, et donc a l'élément source

image.setAttribute('src', attribute);               // prendre l'élément img créé et le donner a l'attribut data-image (en faisant un src)

target.appendChild(image);                          // mettre la balise image dans l'élément 

console.log(value.getAttribute("data-image"));      // pour voir si la 4e variable fonctionne