var tempNumber = 0;
var clearOnNextInput = true;
var quantityOfNumbers = 0;

function initCalculator() {

}

function getExistingDigits() {
    var p = document.getElementById('digits');
    var text = p.textContent;
    return Number(text);
}

function numberButton(buttonPressed) {
    var number = getExistingDigits();
    quantityOfNumbers++;

    if (quantityOfNumbers > 7) {
        document.getElementById("digits").style.fontSize = "22px";
    }
    if (quantityOfNumbers > 15) {
        document.getElementById("digits").style.fontSize = "16px";
    }
    if (quantityOfNumbers > 17) {
        document.getElementById("digits").style.fontSize = "48px";
        document.getElementById("digits").innerText = "ERROR";
        clearOnNextInput = true;
        quantityOfNumbers = 0;
    } else if (clearOnNextInput) {
        document.getElementById("digits").innerText = buttonPressed;
        clearOnNextInput = false;
    } else {
        document.getElementById("digits").innerText = number + buttonPressed.toString();
    }
}

function plusButton() {
    tempNumber = getExistingDigits();
    clearOnNextInput = true;
}

function equalsButton() {
    var total;

    total = getExistingDigits() + tempNumber;

    document.getElementById("digits").innerText = total;

    clearOnNextInput = true;
}

function oncButton() {
    quantityOfNumbers = 0;
    document.getElementById("digits").innerText = "0";
    document.getElementById("digits").style.fontSize = "48px";
}