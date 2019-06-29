// 07-classes/01-instances/script.js - 7.1: instances



class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
document.getElementById("run").addEventListener("click", () => {
    let sCat = new Cat("Skitty", 9);    // variable qui prend ses valeurs et en fait une classe
    let pCat = new Cat("Pixel", 6);     // variable qui prend ses valeurs et en fait une autre classe
    console.log(sCat, pCat);            // afficher les 2 variables qui sont devenues des classes (grace a la clase Cat)
})