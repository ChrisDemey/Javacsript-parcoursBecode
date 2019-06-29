// 06-objects/01-generate-object/script.js - 6.1: générer un object

let list = document.getElementById("run");
list.addEventListener("click", function () {
    let myCharacter = {
        lastName: "Demey",
        firstName: "Christophe",
        age: 29,
        city: "Gilly",
        country: "Belgique",
    }
    console.log(`${myCharacter.lastName} ${myCharacter.firstName}, ${myCharacter.age} ans, habite à ${myCharacter.city} en ${myCharacter.country}`);    // Essayer de faire plus court (besoin du this.valeur??)
})