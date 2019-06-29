//02-maths/01-calculator-one/script.js - 2.1: calculatrice


// to get the value of an input: document.getElementById("element-id").value

function numbers() {                                    // créer une fonction "numbers"
    let one = document.getElementById("op-one").value;  // variable "one" qui va chercher le label "op-one"
    let two = document.getElementById("op-two").value;  // variable "two" qui va chercher le label "op-two"
    return [one, two];                                  // retourner les 2 variables
}

document.getElementById("addition").addEventListener("click", () => {   // chercher la div "addition" et y ajouter un évènement (au clic)
    let result = numbers();                                             // créer une variable "result" qui a pour valeur la fonction "numbers"
    result = (parseInt(result[0]) + parseInt(result[1]));               // la variable "result" vaut au total le premier caractère + le deuxième caractère
    alert(result);                                                      // oon fait un alert de la variable "result"
    // perform an addition
});

document.getElementById("substraction").addEventListener("click", () => {
    let result = numbers();
    result = (parseInt(result[0]) - parseInt(result[1]));   // la variable "result" vaut au total le premier caractère - le deuxième caractère
    alert(result);
    // perform a substraction
});

document.getElementById("multiplication").addEventListener("click", () => {
    let result = numbers();
    result = (parseInt(result[0]) * parseInt(result[1]));   // la variable "result" vaut au total le premier caractère mulitplié par le deuxième caractère
    alert(result);
    // perform a multiplication
});

document.getElementById("division").addEventListener("click", () => {
    let result = numbers();
    result = (parseInt(result[0]) / parseInt(result[1]));   // la variable "result" vaut au total le premier caractère divisé par le deuxième caractère
    alert(result);
    // perform a division
});