// exercice 1
let mousse = document.querySelectorAll(".hoverMe");

for (i=0;i<mousse.length;i++){
    mousse[i].addEventListener("mouseover",function(){
        this.style.display = "none";
    })
}

// exercice 2
let mousseB = document.querySelector(".reset");

mousseB.addEventListener("click", function(){
for(i=0;i<mousse.length;i++){
    mousse[i].style.display ="block";
    }
})

// exercice 3
let x = 0;
let y = 0;

let moveX = document.getElementById("axe-x");
moveX.addEventListener("mousemove",function(){
    for(i=0;i<1000;i++){
        moveX.innerHTML = "x = " + (event.offsetX);
    }
})

let moveY = document.getElementById("axe-y");
moveX.addEventListener("mousemove",function(){
    for(i=0;i<1000;i++){
        moveY.innerHTML = "y = " + (event.offsetY);
    }
})