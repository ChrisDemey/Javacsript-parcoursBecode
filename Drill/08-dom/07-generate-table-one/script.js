// 08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)

let target = document.getElementById("target");
let tab = '';
let rows = 10;
let cols = 1
for (i=0;i<rows;i++){
    tab +='<tr>';
    for(j=0;j<cols;j++){
        tab +='<td>'+ j+'</td>';
    }
    tab+='</tr>';
}
target.innerHTML = ('<table border=1>'+tab+ '</table>');