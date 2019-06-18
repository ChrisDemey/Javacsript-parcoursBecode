// 06-objects/03-keys-values/script.js - 6.3: clés & valeurs

let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    const person = {lastname: "Delnatte",
                    firstname: "Pierre-Antoine",
                    nickname: "Leny",
                    birthDate: "08-05-1985",
                    city: "Liège",
                    status: "married",
    };
    console.log(Object.keys(person));
    console.log(Object.values(person));
})