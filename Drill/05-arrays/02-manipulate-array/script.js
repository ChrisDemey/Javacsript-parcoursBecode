//05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau

const fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
];

let changes = document.getElementById('run');
changes.addEventListener('click', () => {
    console.log(fruits)
    fruits[0] = 'banane'
    fruits[9] = 'kiwi'
    console.log(fruits)
})