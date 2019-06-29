// 05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques

document.getElementById('run').addEventListener('click', () => {
    let array = [];
    for (i = 1; i <= 10; i++) {
        let random = Math.floor(Math.random() * 100);
        array.push(random);
        document.getElementById(`n-${i}`).innerHTML = random;
    }

    let min = Math.min(...array);
    document.getElementById('min').innerHTML = min
    let max = Math.max(...array);
    document.getElementById('max').innerHTML = max

    let sum = array.reduce((a, b) => a + b, 0);
    document.getElementById('sum').innerHTML = sum
    document.getElementById('average').innerHTML = sum / 10;
    console.log(sum);
    console.log(array);
    console.log(min);
})