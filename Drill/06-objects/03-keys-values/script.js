// 06-objects/03-keys-values/script.js - 6.3: clés & valeurs

let list = document.getElementById("run");
list.addEventListener("click", function () {
    const names = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };

    const key = Object.keys(names);
    const value = Object.values(names);

    console.log(key);
    console.log(value);
})