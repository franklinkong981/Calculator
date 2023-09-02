let screenText = document.querySelector('.screen-text');

const calcButtons = document.querySelectorAll('.calc-button');
calcButtons.forEach((currentCalcButton) => 
    currentCalcButton.addEventListener('click', function() {
        handleCalcButtonClick(currentCalcButton.textContent);
    }
));

function handleCalcButtonClick(buttonContent) {
    screenText.textContent = buttonContent;
}



