// Task #1: 
// a b və c ədədləri verilir. a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.


let a = prompt("add a value");
let b = prompt("add b value");
let c = prompt("add c value");

let differenceCA = Math.abs(c-a);
let differenceCB = Math.abs(c-b);
let differenceAB = differenceCA - differenceCB

function nearestNumber(){
    if (differenceAB === 0){
        console.log( "a and b are on the same distance with c.");
        alert(`${a} and ${b} are on the same distance with ${c}`);
    }
    else if (differenceCA === differenceCB){
        console.log("a and b are on the same distance with c.");
        alert(`${a} and ${b} are on the same distance with ${c}`);
    }
    else if (differenceCA < differenceCB){
        console.log("a is nearer to c than b");
        alert(`${a} is nearer to ${c} than ${b}`);
    }
    else if (differenceCA > differenceCB){
        console.log("b is nearer to c than b");
        alert(`${b} is nearer to ${c} than ${a}`);
    }
    else{
        console.log("add correct values.")
        alert("add correct values")
    }
}

nearestNumber();

