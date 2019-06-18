/*Diseur de bonne aventure*/
let N = 0;
const Z = "Sophie";
const Y = 'Belgique';
const X = 'developer';
console.log("Vous serez " + X + " et habiterez à " + Y + ", et marié a " + Z + " avec " + N + " enfants.")

/*Calculer l'âge*/
let year = 2019;
let yearbirth = 1990;
let age = 2019 - 1990;
console.log(age)

/*Bientôt vieux*/
let age= 29;
let ageMax= 100;
let food= "meat";
let foodDay= 2;
let restLife= ageMax - age;
let foodYear= foodDay * 365;
let result= restLife * foodYear;
console.log (`Il vous reste ${result} de ${food} à manger pendant ${restLife} ans, avant vos ${ageMax} ans`);

/*Priorités*/
let etape1 = (1+2);
let etape2 = 3;
let etape3 = 4;
let etape4 = 2;
let result = etape1 * etape2 + (etape3 / etape4);
console.log (result);