// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

const character = {
    firstName: "Christophe",
    lastName: "Demey",
    get name() {                                        // créer méthode name
        return `${this.firstName} ${this.lastName}`     // retourner une chaine de caractères avec firstname et lastname
    },
    set name(value) {                                   // méthode name avec paamètre value
        const name = value.split(' ');                  // split pour diviser une chaine de caractères (de value)
        this.firstName = name[0];                       // grace a split, séparer la chaine de caractères de firstname
        this.lastName = name[1];
    }
}
const run = document.getElementById("run");
run.addEventListener("click", () => console.log(character.name));