const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

let userNum1;

let userNum2;

let operator;

const operate = (num1, num2, operator) => {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

const display = document.getElementById('display');

const numberBtns = document.querySelectorAll('#inputContainer button');

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    display.textContent = 0;
});

const operatorBtns = document.querySelectorAll('#operatorContainer button');

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        const operatorClicked = button.textContent;

        if(['+', '-', '*', '/'].includes(operatorClicked)) {
            userNum1 = Number(display.textContent);
            operator = operatorClicked;
            display.textContent = '0';
        }

        if (operatorClicked === '=') {
            userNum2 = Number(display.textContent);
            const result = operate(userNum1, userNum2, operator);
            display.textContent = result;
        }
    });
});