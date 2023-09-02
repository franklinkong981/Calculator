let screenText = document.querySelector('.screen-text');
let statementToParse = ""; //Expression that we'll evaluate.
let statementToDisplay = ""; //What we'll display on the calculator.
let previousAnswer = "";

const calcButtons = document.querySelectorAll('button');
calcButtons.forEach((currentCalcButton) => 
    currentCalcButton.addEventListener('click', function() {
        handleCalcButtonClick(currentCalcButton.textContent);
    }
));

function handleCalcButtonClick(buttonContent) {
    if (buttonContent === "Clear") {
        statementToParse = "";
        statementToDisplay = "";
        screenText.textContent = "0";
    } else if (buttonContent === "Del" && statementToDisplay !== "") {
        statementToParse = statementToParse.slice(0, -1);
        statementToDisplay = statementToDisplay.slice(0, -1);
        screenText.textContent = (statementToDisplay === "") ? "0" : statementToDisplay;
    } else if (Number.isInteger(parseInt(buttonContent)) || buttonContent === ".") {
        statementToParse += buttonContent;
        statementToDisplay += buttonContent;
        screenText.textContent = statementToDisplay;
    }
    else if (buttonContent === "Neg") {
        statementToParse += "-";
        statementToDisplay += "-";
        screenText.textContent = statementToDisplay;
    }
}



