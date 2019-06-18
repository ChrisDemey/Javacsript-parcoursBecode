// 03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)

let click = document.querySelector("#run");
click.addEventListener("click", function() {

let changecolor = document.getElementById("color").value;
console.log(changecolor);
    document.body.style.backgroundColor = changecolor;
})