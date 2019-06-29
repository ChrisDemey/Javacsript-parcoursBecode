// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)

////////// Fais avec l'aide de Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts().then((articles) => {
        console.log(articles);
    });
})