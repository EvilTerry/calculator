let displayNumber = 0;
let calculatedNumber = 0;
let currentOperator = 'none';


const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const allClear = document.querySelector('.allClear');
const operatorBtn = document.querySelector('.operator');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const numberBtns = document.querySelectorAll('.btn');

clear.addEventListener('click', screenClear);
allClear.addEventListener('click', screenAllClear);
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
numberBtns.forEach(button => {
    button.addEventListener('click', () => { screenEnter(button.textContent) } );
});







function add(x, y) {
    return x+y
}

function subtract(x, y) {
    return x-y
}

function multiply(x, y) {
    return x*y
}

function divide(x, y) {
    return x/y;
}

function screenEnter(number) {
    screen.textContent = displayNumber;
    if(screen.textContent === '0')
        screen.textContent = number;
    else
        screen.textContent += number;
    displayNumber = screen.textContent;
}

function screenClear() {
    if(screen.textContent.length === 1)
        screen.textContent = 0;
    else
        screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
    displayNumber = screen.textContent;
}

function screenAllClear() {
    screen.textContent = 0;
    displayNumber = 0;
    calculatedNumber = 0;
}

function operate(operator, firstNumber, secondNumber) {

}

function addNumbers() {
    calculatedNumber += Number(displayNumber);
    displayNumber = 0;
    screen.textContent = calculatedNumber;
    currentOperator = 'add';
}

function subtractNumbers() {
    calculatedNumber -= Number(displayNumber);
    displayNumber = 0;
    screen.textContent = calculatedNumber;
    currentOperator = 'subtract';
}