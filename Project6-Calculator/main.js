const display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (operator === "×") {
        display.value += "*";
    } else if (operator === "÷") {
        display.value += "/";
    } else {
        display.value += operator;
    }
}

let openBracket = true;

function appendBracket() {
    if (openBracket) {
        display.value += "(";
    } else {
        display.value += ")";
    }
    openBracket = !openBracket;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}
