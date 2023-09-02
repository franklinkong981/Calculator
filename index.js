let screenText = document.querySelector('.screen-text');
let statementToParse = "";

const calcButtons = document.querySelectorAll('button');
calcButtons.forEach((currentCalcButton) => 
    currentCalcButton.addEventListener('click', function() {
        handleCalcButtonClick(currentCalcButton.textContent);
    }
));

function handleCalcButtonClick(buttonContent) {
    if (buttonContent === "Clear") {
        screenText.textContent = "0";
    }
    else {
        screenText.textContent = buttonContent;
    }
}



