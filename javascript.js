let displayNumber = 'NaN';
let calculatedNumber = 'NaN';
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
operatorBtn.addEventListener('click', () => {operate(currentOperator)});
addBtn.addEventListener('click', () => {setOperator('add')});
subtractBtn.addEventListener('click', () => {setOperator('subtract')});
divideBtn.addEventListener('click', () => {setOperator('divide')});
multiplyBtn.addEventListener('click', () => {setOperator('multiply')});
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
    if(displayNumber === 'NaN')
    {
        screen.textContent = number;
        displayNumber = screen.textContent;
    }
    else
    {
        screen.textContent += number;
        displayNumber = screen.textContent;
    }
    console.log(displayNumber);
}

function screenClear() {
    if(displayNumber === 'NaN')
        return;
    if(screen.textContent.length === 1)
    {
        screen.textContent = 0;
        displayNumber = 'NaN';
    }
    else
        screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
    displayNumber = screen.textContent;
}

function screenAllClear() {
    screen.textContent = 0;
    displayNumber = 'NaN';
    calculatedNumber = 'NaN';
    currentOperator = 'none';
}

function setOperator(operator) {
    if(currentOperator === 'none')
    {
        currentOperator = operator;
        operate(currentOperator);
    }
    else
    {
        operate(currentOperator);
        currentOperator = operator;
    }
}

function operate(operator) {
    if(calculatedNumber === 'NaN')
    {
        calculatedNumber = Number(displayNumber);
        displayNumber = 'NaN';
    }
    if(displayNumber === 'NaN')
        return;

    switch(operator) {
        case 'add':
            addNumbers();
            break;
        case 'subtract':
            subtractNumbers();
            break;
        case 'divide':
            divideNumbers();
            break;
        case 'multiply':
            multiplyNumbers();
            break;
    };
}

function addNumbers() {
    calculatedNumber += Number(displayNumber);
    displayNumber = 'NaN';
    screen.textContent = calculatedNumber;
    currentOperator = 'add';
}

function subtractNumbers() {
    calculatedNumber -= Number(displayNumber);
    displayNumber = 'NaN';
    screen.textContent = calculatedNumber;
    currentOperator = 'subtract';
}

function divideNumbers() {
    if(displayNumber = '0')
    {
        screen.textContent = "Can't divide by 0...";
        return
    }
    calculatedNumber /= Number(displayNumber);
    displayNumber = 'NaN';
    screen.textContent = calculatedNumber;
    currentOperator = 'divide';
}

function multiplyNumbers() {
    calculatedNumber *= Number(displayNumber);
    displayNumber = 'NaN';
    screen.textContent = calculatedNumber;
    currentOperator = 'multiply';
}