function SiblingSolution(N) {

    var testNumber=N;
    var highestInt=0;

    if ((testNumber > 0) && (testNumber < 10001)) {

        var temp = testNumber.toString();

        var charArray = Array.from(temp);

        charArray.sort(function(a, b){return b-a});

        highestInt = parseInt(charArray.join(""));

    }

    return highestInt;

}