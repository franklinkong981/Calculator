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
    } else if (Number.isInteger(parseInt(buttonContent))) {
        statementToParse += buttonContent;
        statementToDisplay += buttonContent;
        screenText.textContent = statementToDisplay;
    }
}



