// 11-fetch/04-add/script.js - 11.4: ajouter un élément

////////// Fais avec l'aide de Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click", async function (e) {
    e.preventDefault()
    let newOne = await fetch("http://localhost:3000/heroes", {
        credentials: "omit",
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("hero-name").value,
            alterEgo: document.getElementById("hero-alter-ego").value,
            abilities: document.getElementById("hero-powers").value.split(",")
        })
    });
    console.log(newOne);
    return false;
})