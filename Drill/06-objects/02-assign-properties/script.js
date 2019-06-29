// 06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés

const computers = [
    {id: "0001", available: false, user: "leny", os: "macOS"},
    {id: "0002", available: false, user: "Nicolas"},
    {id: "0003"},
    {id: "0004", os: "Windows"},
    {id: "0005"},
    {id: "0006", os: "macOS"},
    {id: "0007"},
    {id: "0008"},
    {id: "0009", available: false, user: "Anthony"}
];
const defaultProps = {
    available: true,
    os: "linux",
    user: null,
};
document.getElementById("run").addEventListener("click",()=>{   // chercher l'id run et y ajouter un évènement au click
    for (const object of computer){                             // boucle avec variable object de computer
        for (const elem in defaultProps){                       // dedans une 2e boucle avec variable elem dans defaultProps
            if (object[elem]===undefined){                      // dedans aussi une condition: si elem est strictement égal a la valeur undefined
                object[elem]=defaultProps[elem];                // alors y ajouter un elem de defaultProps
            }
        }
    }
})