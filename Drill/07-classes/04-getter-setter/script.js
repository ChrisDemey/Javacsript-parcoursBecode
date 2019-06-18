// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    class  Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        getter() {
            console.log (this.firstname + this.lastname)
        }
        setter() {
            console.log( this.firstname + " " + this.lastname)
        }
        sayHello() {
            console.log ("Hello " + this.firstname + " " + this.lastname);
        }
    }
    let pers = new Person ("Demey", "Christophe");
    pers.getter()
    let pers2 = new Person("schuhler","estelle")
    pers2.setter()
})