// 08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)

///// Refait durant la journée de consolidation du 27/06 /////

let target = document.getElementById("target");             // chercher l'ID target
let tab = '';                                               // variable vide
let rows = 10;                                              // rows avec valeur 10
let cols = 1                                                // cols avec valeur 1
for (i=0;i<rows;i++){                                       // boucle sur rows
    tab +='<tr>';                                           // ajouter <tr> a tab
    for(j=0;j<cols;j++){                                    // nouvelle boucle avec cols
        tab +='<td>'+ j+'</td>';                            // ajouter <td> au début de tab et </td> a la fin de tab
    }
    tab+='</tr>';                                           // ajouter </tr> a la fin de tab
}
target.innerHTML = ('<table border=1>'+tab+ '</table>');    // changer le html et y mettre éléments <table border=1> et </table> avec la variable tab dedans