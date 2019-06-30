// 08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)

///// Refait durant la journée de consolidation du 27/06 /////

let target = document.getElementById("target");
let tab = '';                                           // variable vide
let rows = 11;                                          // rows avec valeur 11
let cols = 11;                                          // cols avec valeur 11
for (i = 1; i < rows; i++) {                            // boucle sur rows
    tab += '<tr>';                                      // ajouter <tr> a tab
    for (j = 1; j < cols; j++) {                        // nouvelle boucle sur cols
        tab +='<td>' + j +"x"+ i+ '='+ (j*i)+'</td>';   // ajouter <td> + une valeur cols + un "x" + une valeur rows + un "=" + (cols * rows) et </td>
    }
    tab += '</tr>';                                     // ajouter </tr> a la fin de tab
}
target.innerHTML = ('<table border=1>' + tab + '</table>');     // changer html par l'élément <table border=1> et </table> avec tab dedans