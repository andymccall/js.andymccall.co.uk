var tempNumber=0;
var clearOnNextInput=true;

function initCalculator() {

}

function getExistingDigits(){
    var p = document.getElementById('digits');
    var text = p.textContent;
    return Number(text);
}

function numberButton(buttonPressed) {
    var number = getExistingDigits();

    if (clearOnNextInput) {
        document.getElementById("digits").innerText = buttonPressed;
    } else {
        document.getElementById("digits").innerText = number + buttonPressed.toString();
    }
    clearOnNextInput = false;
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

function allClearButton() {
    document.getElementById("digits").innerText="0";
}