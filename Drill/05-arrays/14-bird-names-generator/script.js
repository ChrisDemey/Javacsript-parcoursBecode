//05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = [
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ];
    let random = birds[Math.floor(Math.random()*birds.length)]
    let random2 = adjectives[Math.floor(Math.random()*adjectives.length)]
    
    if (random.hasOwnProperty('fem')){
        document.getElementById("target").innerHTML = (random.name+" "+random2+"e")
    } else{
        document.getElementById("target").innerHTML = (random.name+" "+ random2)
    }
})