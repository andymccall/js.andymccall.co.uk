document.getElementById("cookieValue").addEventListener("focus", clearTextInput);
document.getElementById("cookieValue").addEventListener("blur", handleEmptyTextInput);

function manageButtons() {
    if (checkCookie()) {
        document.getElementById("deleteButton").disabled = false;
        document.getElementById("readButton").disabled = false;
    } else {
        document.getElementById("message").innerHTML = "No cookie set!";
        document.getElementById("deleteButton").disabled = true;
        document.getElementById("readButton").disabled = true;
    }
}

function createCookie() {
    var expireDays = 30;
    var cookieName = "JSCookie";
    var cookeValue = document.getElementById("cookieValue").value;

    var date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = cookieName + "=" + cookeValue + ";" + expires + ";path=/";
    manageButtons();
}

function readCookie() {
    var cookieName = "JSCookie=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    if (cookieArray == "") {
        document.getElementById("message").innerHTML = "No cookie set!";
    } else {
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) == 0) {
                document.getElementById("message").innerHTML = cookie.substring(cookieName.length, cookie.length)

            }
        }
    }
    manageButtons();
}

function checkCookie() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    if (cookieArray == "") {
       return false;
    } else {
        return true
    }
}

function deleteCookie() {
    document.cookie = "JSCookie=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
    manageButtons();
}

function clearTextInput() {
    document.getElementById("cookieValue").placeholder = "";
}

function handleEmptyTextInput() {
    var input = document.getElementById("cookieValue").value;

    if (input == "") {
        document.getElementById("cookieValue").placeholder = "Enter some text";
    }

}