//04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

let year =["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

document.getElementById("run").addEventListener("click",()=>{
    let givenYear=document.getElementById("year").value;
    let table=[];
    for (let month=0;month<12;month++){
        let currentDay = new Date(givenYear, month, 13);
        if (currentDay.getDay()===5){
            table.push(year[month]);
        };
    };
    console.log(table);
})