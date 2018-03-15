function solution(N) {

    // Convert the number to a binary string...
    var binary = N.toString(2);

    var i = binary.length-1;

    while(binary.charAt(i)=='0') {
        i--;
    }

    var counter = 0;
    var gap = 0;

    for(; i>=0; i--) {
        if(binary.charAt(i)=='1') {
            gap = Math.max(gap, counter);
            counter = 0;
        } else {
            counter++;
        }
    }

    gap = Math.max(gap, counter);

    return gap;

}