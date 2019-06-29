const performOperation = operation => {

    let one = document.getElementById("op-one").value;
    let two = document.getElementById("op-two").value;

    switch (operation) {
        case "addition":
            alert(parseInt(one) + parseInt(two));
            break;
        case "substraction":
            alert(parseInt(one) - parseInt(two));
            break;
        case "multiplication":
            alert(parseInt(one) * parseInt(two));
            break;
        case "division":
            alert(parseInt(one) / parseInt(two));
            break;
    }
};

Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false),),
);