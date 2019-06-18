// 08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)

let target = document.getElementById("target");
        let tab = '';
        let rows = 11;
        let cols = 11;
        for (i = 1; i < rows; i++) {
            tab += '<tr>';
            for (j = 1; j < cols; j++) {
                tab +='<td>' + j +"x"+ i+ '='+ (j*i)+'</td>';
            }
            tab += '</tr>';
        }
target.innerHTML = ('<table border=1>' + tab + '</table>');