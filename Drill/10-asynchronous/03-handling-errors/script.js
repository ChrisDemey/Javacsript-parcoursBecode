// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur

////////// Fais avec l'aide de Maxim Lopez et Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click", () => {
    window.lib.getPersons((error, articles) => {
        console.log(articles);
        if (error) {
            console.error("ERROR");
        }
    });
})