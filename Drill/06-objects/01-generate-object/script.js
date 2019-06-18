// 06-objects/01-generate-object/script.js - 6.1: générer un object

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    let character = {
        firstname: "Demey",
        lastname: "Christophe",
        age: 29,
        city: "Gilly",
        country: "Belgique",
    }
    console.log(character.firstname + " " + character.lastname + ", " + character.age + " ans, habite à " + character.city + " en " + character.country);
})