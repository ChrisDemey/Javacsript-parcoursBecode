//09-misc/01-waving-text/script.js - 9.1: effet vague

const target = document.getElementById('target');
const arrText = target.textContent;
const fontSizes = [1, 1.5, 2, 2.5, 3];
let wave = 0;
let i = 1;
target.innerHTML = null;
for (el of arrText) {
    const span = document.createElement('span');
    const textNode = document.createTextNode(el);
    span.appendChild(textNode);
    span.style.fontSize = fontSizes[wave] + 'em';
    target.appendChild(span);
    if (wave === fontSizes.length - 1) {
        i = -1;
    } else if (wave === 0) {
        i = 1
    }
    console.log(i);
    wave += i;
}