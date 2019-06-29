// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires

////////// Fais avec l'aide de Maxim Lopez et Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts((error, articles) => {
        console.log(articles);
        articles.forEach(element => {
            window.lib.getComments(element.id, (error, comments) => {
                element["comments"] = comments;
            }) 
        });
    });
})