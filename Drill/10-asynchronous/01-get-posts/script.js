// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles

////////// Fais avec l'aide de Maxim Lopez et Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts((erreur, articles) => {
        console.log(articles);
    });
})