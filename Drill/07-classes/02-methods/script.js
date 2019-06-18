// 07-classes/02-methods/script.js - 7.2: méthodes

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    class  Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello() {
            console.log ("Hello " + this.firstname + " " + this.lastname);
        }
    }
    const pers1 = new Person ("Demey" , "Christophe");
    pers1.sayHello()
})