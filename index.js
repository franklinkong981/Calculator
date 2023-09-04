let screenText = document.querySelector('.screen-text');
let statementToParse = ""; //Expression that we'll evaluate.
let statementToDisplay = ""; //What we'll display on the calculator.
let previousAnswer = "";
let isError = false;
let isInfinity = false;

const calcNonOperationButtons = document.querySelectorAll('button');
calcNonOperationButtons.forEach((currentCalcButton) => 
    currentCalcButton.addEventListener('click', function() {
        handleNonOperationClick(currentCalcButton.textContent);
    })
);
const calcOperationButtons = document.querySelectorAll('.operation-button');
calcOperationButtons.forEach((currentCalcButton) =>
    currentCalcButton.addEventListener('click', function() {
        handleOperationClick(currentCalcButton.id, currentCalcButton.textContent);
    })
);

function handleNonOperationClick(buttonContent) {
    if (buttonContent === "Clear") {
        handleClearButton();
    } 
    if (!isError && !isInfinity) {
        if (buttonContent === "Del" && statementToDisplay !== "") {
            handleDeleteButton();
        } else if (buttonContent === "Ans") {
            handleAnswerButton();
        } else if (Number.isInteger(parseInt(buttonContent)) || buttonContent === ".") {
            handleNumberButton(buttonContent);
        }
        else if (buttonContent === "Neg") {
            handleNegativeButton();
        }
    }
}

function handleOperationClick(buttonId, buttonContent) {
    if (!isError && !isInfinity) {
        if (buttonId === "addition") {
            handleAddition(buttonContent);
        }
        else if (buttonId === "subtraction") {
            handleSubtraction(buttonContent);
        }
        else if (buttonId === "multiplication") {
            handleMultiplication(buttonContent);
        }
        else if (buttonId === "division") {
            handleDivision(buttonContent);
        }
        else if (buttonId === "equals" && statementToParse !== "") {
            handleEnter();
        }
    }
}

function handleClearButton() {
    statementToParse = "";
    statementToDisplay = "";
    isError = false;
    isInfinity = false;
    screenText.textContent = "0";
}

function handleDeleteButton() {
    statementToParse = statementToParse.slice(0, -1);
    statementToDisplay = statementToDisplay.slice(0, -1);
    screenText.textContent = (statementToDisplay === "") ? "0" : statementToDisplay;
}

function handleNumberButton(buttonContent) {
    statementToParse += buttonContent;
    statementToDisplay += buttonContent;
    screenText.textContent = statementToDisplay;
}

function handleNegativeButton() {
    statementToParse += " -";
    statementToDisplay += " -";
    screenText.textContent = statementToDisplay;
}

function handleAnswerButton() {

}

function handleAddition(buttonContent) {
    statementToParse += "+";
    statementToDisplay += buttonContent;
    screenText.textContent = statementToDisplay;
}

function handleSubtraction(buttonContent) {
    statementToParse += "-";
    statementToDisplay += buttonContent;
    screenText.textContent = statementToDisplay;
}

function handleMultiplication(buttonContent) {
    statementToParse += "*";
    statementToDisplay += buttonContent;
    screenText.textContent = statementToDisplay;
}

function handleDivision(buttonContent) {
    statementToParse += "/";
    statementToDisplay += buttonContent;
    screenText.textContent = statementToDisplay;
}

function handleEnter() {
    try {
        let answer = eval(statementToParse);
        if (isFinite(answer)) {
            screenText.textContent = answer;
        }
        else {
            screenText.textContent = "Infinity";
            isInfinity = true;
        }
    } catch (error) {
        isError = true;
        screenText.textContent = "ERROR";
    } finally {
       statementToDisplay = "";
       statementToParse = ""; 
    }
}
