// 11-fetch/03-details/script.js - 11.3: details

////////// Fais avec l'aide de Ludovic Lambinon-Mortier //////////

function api() {
    fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(data => {
            let item = template.content.querySelector(".hero")
            let template = document.getElementById("tpl-hero")
            
            for (i = 0; i < data.length; i++) {
                let dataI = data[i].id;
                console.log(data[i].id)
                let second = document.importNode(item, true);
                second.getElementsByClassName("name")[0].innerHTML = data[i].name;
                second.getElementsByClassName("alter-ego")[0].innerHTML = data[i].alterEgo;
                second.getElementsByClassName("powers")[0].innerHTML = data[i].abilities;
                let target = document.getElementById("target");
                let input = document.getElementById("hero-id");
                let values = input.value;
                if (values == dataI) {
                    target.innerHTML = "";
                    target.appendChild(second);
                }
            };
        })
        .catch(error => {
            console.error(error)
        });
};

document.getElementById("run").addEventListener("click", () => {
    api();
})