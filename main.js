let button = document.querySelector("#calculate");

function debtCalculator() {
    let sleepHour = document.getElementById("aos");
    let sleepHourMust = document.getElementById("aos-wget");
    let resultElement = document.getElementById("result");

    if (sleepHour.value >= 6) {
        console.log(`Rest in peace..`);
        resultElement.value = "REST IN PEACE";
    } else {
        console.log(`Please enter valid data..`);
        resultElement.value = ""; 
}

button.addEventListener("click", debtCalculator);
