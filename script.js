let display = document.getElementById('display');

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    display.innerText += ' ' + operator + ' ';
}

function clearDisplay() {
    display.innerText = '';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}
function deleteLast() {
    display.innerText = display.innerText.slice(0,-1);
 }