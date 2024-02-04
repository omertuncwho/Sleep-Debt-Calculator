let button = document.querySelector("#calculate");
let resetButton = document.querySelector("#reset");

function debtCalculator() {
    let recommendedHours = document.getElementById("recommended").valueAsNumber;
    let actualHours = document.getElementById("actual").valueAsNumber;
    let resultElement = document.getElementById("result");

    if (!isNaN(recommendedHours) && !isNaN(actualHours) && recommendedHours >= 0 && actualHours >= 0) {
        let sleepDebt = recommendedHours - actualHours;
        if (sleepDebt <= 0) {
            document.body.style.backgroundImage = "linear-gradient(to left, #f9f586, #96fbc4  )";
            resultElement.value = "You are well-rested!";
        } else {
            document.body.style.backgroundImage = "linear-gradient(to left,  #ffb199,#ff0844)";
            resultElement.value = `Your sleep debt is ${sleepDebt} hours. Get some more rest!`;
        }
    } else {
        document.body.style.backgroundImage = "linear-gradient(to left, #f6d365, #fda085)";
        resultElement.value = "Please enter valid data.";
    }
}

function resetCalculator() {
    document.body.style.backgroundImage = "linear-gradient(to left, #FFFFFF, #FFEFBA)";
    document.getElementById("recommended").value = "";
    document.getElementById("actual").value = "";
    document.getElementById("result").value = "";
}

button.addEventListener("click", debtCalculator);

