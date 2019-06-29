// 07-classes/02-methods/script.js - 7.2: méthodes

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.sayHello = () => console.log(`Hello, ${this.firstname} ${this.lastname}!`);    
        // créer méthode sayHello qui retourne une suite de caractères avec les propriétés firstname et lastname
    }
}
const script = document.getElementById("run");
script.addEventListener("click", () => {
    let character = new Person("Christophe", "Demey");  // créer une nouvelle classe avec pour valeurs Christophe et Demey
    character.sayHello();                               // retourner la méthode sayHello avec les valeurs de la variable character
})