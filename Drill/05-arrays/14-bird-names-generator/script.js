//05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau

let list = document.getElementById("run");
list.addEventListener("click", function () {
    const birdsList = [
        {name: "mouette", fem: true},               // fem pour femelle et trur y est associé
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
    const birdsData = [
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

    let random = birdsList[Math.floor(Math.random()*birdsList.length)]                  // affiche un caractère aléatoire de l'array birdsList
    let random2 = birdsData[Math.floor(Math.random()*birdsData.length)]                 // affiche un caractère aléatoire de l'array birdsData
    
    if (random.hasOwnProperty('fem')){                                                  // si le caractère aléatoire a le pararmètre fem
        document.getElementById("target").innerHTML = (random.name+" "+random2+"e")     // chercher l'id target, changer son HTML et ajouter "e" a la fin du 2e caractère (birdsData)
    }  
    else{                                                                               
        document.getElementById("target").innerHTML = (random.name+" "+ random2)        // sinon chercher l'id, changer son HTML pour afficher l'oiseau et son adjectif (au masculin)
    }
})