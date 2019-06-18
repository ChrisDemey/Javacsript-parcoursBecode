/*Addition */
let chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
for (let i = 0; i < chiffres.length; i++) {
    total += (chiffres[i])
}
console.log(total)


/* Vos meilleurs choix */
let acteurs = ["Pitt","Pyne","Fassbender"];
for (i=0;i<acteurs.length;i++){
    console.log ("Le numéro " + [i+1] + " est " + acteurs[i]);
}


/* clone */
let perso = ["Mario","Luigi","Peach"];
let total = perso.push("Bowser");
console.log(perso); 
