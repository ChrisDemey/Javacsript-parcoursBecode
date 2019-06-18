// exercice 1
let press = document.querySelector(".character");
document.addEventListener("keydown", function(el) {
    console.log(el);
    switch (el.key){
        case "0":
            press.style.backgroundColor = "orange";
            break;
        case "1":
            press.style.backgroundColor = "purple";
            break;
        case "2":
            press.style.backgroundColor = "red";
            break;
        case "3":
            press.style.backgroundColor = "blue";
            break;
        case "4":
            press.style.backgroundColor = "gray";
            break;
        case "5":
            press.style.backgroundColor = "yellow";
            break;
        case "6":
            press.style.backgroundColor = "green";
            break;
        case "7":
            press.style.backgroundColor = "darkred";
            break;
        case "8":
            press.style.backgroundColor = "pink";
            break;
        case "9":
            press.style.backgroundColor = "darkblue";
            break;
        default :
            break;
    }
})

// exercice 2
let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

document.addEventListener ("keydown",function(el){
    console.log(el);
    switch (el.key){
        case "ArrowUp":
                up.classList.add("highlight");
                break;
        case "ArrowDown":
            down.classList.add("highlight");
            break;
        case "ArrowRight":
            right.classList.add("highlight");
            break;
        case "ArrowLeft":
            left.classList.add("highlight");
            break
    }
})

document.addEventListener ("keyup",function(el){
    console.log(el);
    switch (el.key){
        case "ArrowUp":
                up.classList.remove("highlight");
                break;
        case "ArrowDown":
            down.classList.remove("highlight");
            break;
        case "ArrowRight":
            right.classList.remove("highlight");
            break;
        case "ArrowLeft":
            left.classList.remove("highlight");
            break
    }
})