/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

let firstNumber = '';
let operator = '';
let secondNumber = '';

calculator.addEventListener('click', (event) => {
    const target = event.target;

    
    if (target.classList.contains('number')) {
        if (!operator) {
            firstNumber += target.innerText;
            display.textContent = firstNumber;
        } else {
            secondNumber += target.innerText;
            display.textContent = secondNumber;
        }
    }

    
    if (target.classList.contains('operator')) {
        if (target.innerText === 'C') {
            // Clear the calculator
            firstNumber = '';
            operator = '';
            secondNumber = '';
            display.textContent = '';
        } else {
            operator = target.innerText;
        }
    }

    
    if (target.classList.contains('equals')) {
        let result;
        if (operator === '+') {
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
        } else if (operator === '-') {
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
        } else if (operator === '*') {
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
        } else if (operator === '/') {
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
        }

        display.textContent = result;
        firstNumber = result.toString(); 
        operator = '';
        secondNumber = '';
    }
});