// 06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés

let objetinutile={};
objetinutile.champs=7
console.log(objetinutile.champs)
objetinutile.champs="hello"
console.log(objetinutile.champs)
let go = document.getElementById("run");

go.addEventListener("click", function (el) {
    const computers = [{id: "0001", available: false, user: "leny", os: "macOS"},
                    {id: "0002", available: false, user: "Nicolas"},
                    {id: "0003"},
                    {id: "0004", os: "Windows"},
                    {id: "0005"},
                    {id: "0006", os: "macOS"},
                    {id: "0007"},
                    {id: "0008"},
                    {id: "0009", available: false, user: "Anthony"}];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };

for(i=0;i<9; i++){
    computers[i] = Object.assign({},defaultProps,computers[i]);
}
console.log (computers);
})