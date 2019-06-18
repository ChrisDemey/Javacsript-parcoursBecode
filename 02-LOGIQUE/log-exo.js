/* Langues */
let fr = "Bonjour tout le monde";
let en = "Hello world";
let es = "Hola, Mundo";
let message = prompt("Quelle est votre langue?");

if (message == "fr"){
    console.log (fr)
}
else if (message == "en"){
    console.log (en)
}
else if (message == "es"){
    console.log (es)
}
else {
    console.log ("mauvaise langue")
}

/* Affichage des scores */
let score = prompt ("quel est votre score?");
let result = 200;

if (score >= 90){
    console.log ("A")
}
else if (score <= 50){
    console.log ("C")
}
else if (score < 90){
    console.log ("B")
}
else{
    console.log ("mauvais score")
}

/* Mettre au pluriel */
let singulier = "chien";
let nombres = prompt ("Combien en avez-vous?");

if (nombres > 1){
    console.log (`Je possède ${nombres} ${singulier}s`);
}