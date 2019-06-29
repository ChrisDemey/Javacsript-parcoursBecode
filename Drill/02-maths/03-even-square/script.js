document.getElementById("run").addEventListener("click", () => {
    let table = []
    for (i = 1; i <= 21; i++) {
        if (i % 2 == 0) {
            let result = i * i;
            tableau.push(result);
        }
    }
    alert(table)
});