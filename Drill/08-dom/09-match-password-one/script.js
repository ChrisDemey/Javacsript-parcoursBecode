// 8-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)

///// Refait durant la journée de consolidation du 27/06 /////

const caseOne = document.getElementById("pass-one");
const caseTwo = document.getElementById("pass-two");

// fonction pour la couleur de l'élément
function colorElement(element) {            
    element.style.borderColor = "red";      // changer la couleur des bords en red
}

document.getElementById("run").addEventListener("click", () => {
    if (caseOne.value != caseTwo.value) {   // si caseOne et caseTwo sont différents
        colorElement(caseOne);              // appeler la fonction colorElement a caseOne
        colorElement(caseTwo);              // appeler la fonction colorElement a caseTwo
    }
})