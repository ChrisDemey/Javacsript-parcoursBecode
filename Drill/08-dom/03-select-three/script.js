// 08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css

///// Refait durant la journée de consolidation du 27/06 /////

let change = document.querySelectorAll('p.target');
for (i=0; i<change.length; i++){
    change[i].innerHTML = 'owned';
}