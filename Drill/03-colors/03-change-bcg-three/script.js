/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let color = ["blue","red","green","yellow","grey","orange"];
let i = 0;
document.querySelector("button").addEventListener("click",function(){
    i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]
})