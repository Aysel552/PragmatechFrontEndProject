// only here can write code
    // don't use foor or while loops
    // print numbers between 1-100

// (function (start, end) {
//     if (start < end) {
//         return start + 1;
//     }
// })(1,100);


//  Option 1: Using PrintNumbers();


function PrintNumbers(start, end){
    console.log(start);

    if(start < end){
        PrintNumbers((start + 1), end);
    }
}

PrintNumbers(1, 100);

// Option 2: Assigning anynomous function to the variable:

let printNumber = function (start, end) {
    console.log(start);

    if(start < end){
        printNumber((start + 1), end);
    } 
}

printNumber(1, 100);




