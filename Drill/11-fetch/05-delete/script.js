// 11-fetch/05-delete/script.js - 11.5: supprimer un élément

////////// Fais avec l'aide de Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click", async function () {
    let deleted = await fetch("http://localhost:3000/heroes/" + document.getElementById("hero-id").value, {
        method: "delete",
    })
    console.log(deleted);
});