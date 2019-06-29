// 07-classes/03-inheritance/script.js - 7.3: héritage


//////// Exercice fait avec Maxim Lopez et Ludovic Lambinon-Mortier /////////
//////// J'ai encore du mal avec les "constructor" et les "super". A travailler... ////////


class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}
class Cat extends Animal {      // classe Cat qui a pour parent Animal (grace a extends)
    constructor(name) {         // méthode constructor avec pour paramètre name
        super(name);            // utiliser super pour appeler name
        this.name = "Kuma";     // le name devient Kuma
    }
    static greeting() {
        "Miaoullo";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = "Jack";
    }
    static greeting() {
        "Whaf'up!";
    }
}
const cat = new Cat();
const dog = new Dog();

document.getElementById("run").addEventListener("click", () => {
    console.log(cat.sayHello());
    console.log(dog.sayHello());
})