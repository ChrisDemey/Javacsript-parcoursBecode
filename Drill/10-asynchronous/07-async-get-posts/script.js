// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)

////////// Fais avec l'aide de Ludovic Lambinon-Mortier //////////

///// Nous n'avons pas trouvé la bonne solution /////

document.getElementById("run").addEventListener("click", () => {
    async function postsCall() {
        let x = await window.lib.getPosts().then((articles) => {
            console.log(x);
        });
    };
    postsCall();
})