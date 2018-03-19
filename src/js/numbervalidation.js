document.getElementById("numberInput").addEventListener("focus", clearNumberInput);
document.getElementById("numberInput").addEventListener("blur", handleEmptyNumberInput);

function handleNumber() {
    var input;
    var text;

    input = document.getElementById("numberInput").value;

    if (validateNumber(input)==false) {
        text = "Not valid number";
    } else {
        text = "Valid number";
    }

    document.getElementById("message").innerHTML = text;
}

function validateNumber(number) {
    var validNumber;
    if (isNaN(number) || number < 1 || number > 1000) {
        validNumber = false;
    } else {
        validNumber = true;
    }
    return validNumber;
}

function clearNumberInput() {
    document.getElementById("numberInput").placeholder = "";
}

function handleEmptyNumberInput() {
    var input = document.getElementById("numberInput").value;

    if (input == ""){
        document.getElementById("numberInput").placeholder = "1 to 1000";
    }

}