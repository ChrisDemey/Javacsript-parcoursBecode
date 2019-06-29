// 08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)

const caseOne = document.getElementById("pass-one");
const caseTwo = document.getElementById("pass-two");

// fonction pour la couleur de l'élément
function passwordTrue(element) {            
    element.style.borderColor = "green";      // changer la couleur des bords en green
}

document.getElementById("run").addEventListener("click", () => {
    if (caseOne.value == caseTwo.value) {   // si caseOne et caseTwo sont identique
        passwordTrue(caseOne);              // appeler la fonction passwordTrue a caseOne
        passwordTrue(caseTwo);              // appeler la fonction passwordTrue a caseTwo
    }
    else {                                          // sinon
        caseOne.setAttribute("class","error");      // ajouter les éléments class et error a caseOne
        caseTwo.setAttribute("class","error");      // ajouter les éléments class et error a caseTwo
    }
})