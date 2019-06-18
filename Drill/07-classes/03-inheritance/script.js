// 07-classes/03-inheritance/script.js - 7.3: héritage

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
class Animal {
    constructor(name, greeting) {
        this.name = name;
        this.greeting = greeting
    }
    sayHello() {
        console.log( `"greeting"! I'm ${this.name}!`);
    }
}

class Cat extends Animal {
    constructor(name, greeting) {
        super(name); 
        
        
    }
}

class Dog extends Animal {
    constructor(name, greeting) {
        super(name); 
        
        
    }
}

let dog = new Dog("pixel");
let cat = new Cat("skytti");

cat.sayHello()
dog.sayHello()

})