let i = 1;

function printNumbers() {
    console.log("Print");
    i++;
    if (i < 10) {
        printNumbers();
    }
}

printNumbers();