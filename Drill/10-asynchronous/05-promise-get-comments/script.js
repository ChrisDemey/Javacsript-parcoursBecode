// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)

////////// Fais avec l'aide de Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts().then((articles) => {
        articles.forEach(element => {
            window.lib.getComments(element.id).then((comments) => {
                element["comment"] = comments;
            })
        })
        console.log(articles);
    });
})

///// Problème d'affichage dans la console /////