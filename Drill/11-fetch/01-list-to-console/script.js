// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console

////////// Fais avec l'aide de Ludovic Lambinon-Mortier //////////

document.getElementById("run").addEventListener("click",()=>{
    fetch('http://localhost:3000/heroes')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

    .catch(error => {
        console.error(error)
    });
});