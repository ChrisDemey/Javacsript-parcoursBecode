const performOperation = operation => {

    let un = document.getElementById("op-one").value;
    let deux = document.getElementById("op-two").value;

    switch (operation) {

        case "addition":

            alert(parseInt(un) + parseInt(deux));
            break;

        case "substraction":

            alert(parseInt(un) - parseInt(deux));
            break;

        case "multiplication":

            alert(parseInt(un) * parseInt(deux));
            break;

        case "division":

            alert(parseInt(un) / parseInt(deux));
            break;

    }
};

Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
$btn.addEventListener(
    "click",
    () => (performOperation($btn.id), false),
),
);