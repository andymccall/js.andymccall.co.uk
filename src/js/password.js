document.getElementById("usernameInput").addEventListener("focus", clearUsernameInput);
document.getElementById("usernameInput").addEventListener("blur", handleEmptyUsernameInput);

document.getElementById("passwordInput").addEventListener("focus", clearPasswordInput);
document.getElementById("passwordInput").addEventListener("blur", handleEmptyPasswordInput);


function clearUsernameInput() {
    document.getElementById("usernameInput").placeholder = "";
}

function clearPasswordInput() {
    document.getElementById("passwordInput").placeholder = "";
}

function handleEmptyUsernameInput() {
    var input = document.getElementById("usernameInput").value;

    if (input == ""){
        document.getElementById("usernameInput").placeholder = "Enter username";
    }

}

function handleEmptyPasswordInput() {
    var input = document.getElementById("passwordInput").value;

    if (input == "") {
        document.getElementById("passwordInput").placeholder = "Enter password";
    }
}