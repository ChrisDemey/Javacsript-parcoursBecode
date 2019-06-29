// 06-objects/04-from-entries/script.js - 6.4: fromEntries

const keys = ["name", "species", "age", "gender", "color"];
const values = ["Skitty", "cat", 9, "female", "tabby"];

document.getElementById("run").addEventListener("click", () => {
    let newArray = [];                              // variable avec un array vide
    for (i = 0; i < keys.length; i++) {             // boucle qui s'étends sur toute la array keys
        newArray.push([keys[i], values[i]])         // faire un push d'un élément de keys et de values et les mettre dans l'array newArray (qui était vide)
    }
    let result = Object.fromEntries(newArray);      // variable result qui créé un nouvel objet avec la variable newArray
    console.log(result);                            // afficher la variable result, et donc le nouvel array créé
})