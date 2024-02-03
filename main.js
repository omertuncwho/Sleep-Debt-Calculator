let button = document.querySelector("#calculate");

function debtCalculator() {
    let recommendedHours = document.getElementById("recommended").value;
    let actualHours = document.getElementById("actual").value;
    let resultElement = document.getElementById("result");

    if (recommendedHours >= 0 && actualHours >= 0) {
        let sleepDebt = recommendedHours - actualHours;
        if (sleepDebt <= 0) {
            resultElement.value = "You are well-rested!";
        } else {
            resultElement.value = `Your sleep debt is ${sleepDebt} hours. Get some more rest!`;
        }
    } else {
        resultElement.value = "Please enter valid data.";
    }
}

button.addEventListener("click", debtCalculator);
