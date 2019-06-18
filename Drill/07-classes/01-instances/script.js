// 07-classes/01-instances/script.js - 7.1: instances

let go = document.getElementById("run"); //créer variable "go" + l'associrer a l'id "run"

go.addEventListener("click", function (el) { //créer un évènement lié a la variable "go" (lors d'un click) et en faire une fonction
    class Person {
        constructor(prenom, nom, age) {
            this.prenom = prenom;
            this.nom = nom;
            this.age = 0;
        }
        getName() {
            return this.prenom + " " + this.nom;
        }
        setAge(year) {
            this.age = 2019 - year;
        }
    }

    const skitty = new Person ("skitty" , "9ans");
    const pixel = new Person ("Pixel", "6ans");
    console.log(skitty);
    console.log(pixel);
})
