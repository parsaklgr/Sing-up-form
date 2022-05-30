const passwordInputs = document.querySelectorAll("input[type=\"password\"]");

function checkPassword(event) {
    const passwordInputs = document.querySelectorAll("input[type=\"password\"]");
    if (passwordInputs[0]["value"] === passwordInputs[1]["value"]) {
        passwordInputs[0].classList.remove("error");
        passwordInputs[1].classList.remove("error");
        passwordInputs[0].nextElementSibling.classList.remove("show");
        passwordInputs[0].nextElementSibling.classList.add("hide");
    } else {
        passwordInputs[0].classList.add("error");
        passwordInputs[1].classList.add("error");
        passwordInputs[0].nextElementSibling.classList.remove("hide");
        passwordInputs[0].nextElementSibling.classList.add("show");
    }
}

for (let PI of passwordInputs) {
    PI.addEventListener("input", checkPassword);
}