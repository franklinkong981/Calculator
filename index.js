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
        handleClearButton();
    } else if (buttonContent === "Del" && statementToDisplay !== "") {
        handleDeleteButton();
    } else if (Number.isInteger(parseInt(buttonContent)) || buttonContent === ".") {
        handleNumberButton(buttonContent);
    }
    else if (buttonContent === "Neg") {
        handleNegativeButton();
    }
}

function handleClearButton() {
    statementToParse = "";
    statementToDisplay = "";
    screenText.textContent = "0";
}

function handleDeleteButton() {
    if (statementToDisplay !== "") {
        statementToParse = statementToParse.slice(0, -1);
        statementToDisplay = statementToDisplay.slice(0, -1);
        screenText.textContent = (statementToDisplay === "") ? "0" : statementToDisplay;
    }
}

function handleNumberButton(buttonContent) {
    statementToParse += buttonContent;
    statementToDisplay += buttonContent;
    screenText.textContent = statementToDisplay;
}

function handleNegativeButton() {
    statementToParse += "-";
    statementToDisplay += "-";
    screenText.textContent = statementToDisplay;
}



