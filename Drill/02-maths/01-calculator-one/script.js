/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    function numbers() {
        let un = document.getElementById("op-one").value;
        let deux = document.getElementById("op-two").value;
        return [un, deux];
    }

    document.getElementById("addition").addEventListener("click", () => {
        let result = numbers();
        result = (parseInt(result[0]) + parseInt(result[1]));
        alert(result); // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let result = numbers();
        result = (parseInt(result[0]) - parseInt(result[1]));
        alert(result); // perform a substraction
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let result = numbers();
        result = (parseInt(result[0]) * parseInt(result[1]));
        alert(result); // perform a multiplication
    });

    document.getElementById("division").addEventListener("click", () => {
        let result = numbers();
        result = (parseInt(result[0]) / parseInt(result[1]));
        alert(result); // perform a division
    });
})();