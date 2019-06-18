// to get the value of an input: document.getElementById("element-id").value
let chiffre = document.getElementById("number");

function factoriel(n) {
    if (n > 1) {
        return n * factoriel(n - 1);
    } else {
        return 1;
    }

}
document.getElementById("run").addEventListener("click", () => {
    alert(factoriel(chiffre.value));
    // your code here
});