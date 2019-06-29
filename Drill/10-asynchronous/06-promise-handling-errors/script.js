// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)

////////// Fais avec l'aide de Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click", () => {
    window.lib.getPersons().then((articles) => {
        console.log(articles);
        if(erreur){
            console.error("erreur");
        } else {
            console.log(articles);
        }
    });
})