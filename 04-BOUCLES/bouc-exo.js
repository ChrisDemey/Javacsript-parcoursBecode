/* Pairs et impairs */
let i = 0
for (let i = 0; i <20; i++) {
    if (i%2 === 0){
        console.log (i + ` Ce chiffre est pair`);
    }
    else console.log (i + ` ce chiffre est impair`);
} 

/* Multiplication tables */
let i = 0
for (let i = 0; i <10; i++) {
    if (i%1 === 0){
        console.log (i + ` * 9 = `);
    }
}

let a = 9;
let b;
for (let i = 1; i < 10; i++) {
    b = a * i;
    console.log ("" + i + "*" + a + "=", + b);
}

/* Assigner des grades */
for (let i = 0; i <100; i++) {
    if (i > 90){
        console.log (`Pour ` + i + ` points vous avez le grade A`);
    }
    if (i > 80 && i <= 90){
        console.log (`Pour ` + i + ` points vous avez le grade B`);
    }
    if (i > 70 && i <= 80){
        console.log (`Pour ` + i + ` points vous avez le grade C`);
    }
    if (i > 65 && i <= 70){
        console.log (`Pour ` + i + ` points vous avez le grade D`);
    }
    if (i < 65) {
        console.log (`Pour ` + i + ` points vous avez le grade F`);
    }
} 

/* Pyramide */
for (let i = "*"; i != "******"; i=i+"*") {
    console.log (i);
}
