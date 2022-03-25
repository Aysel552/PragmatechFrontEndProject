// verilən 4 ədədi böyükdən kiçiyə doğru ekrana çap edən program yazın

let a = 19;
let b = 43;
let c = 54;
let d = 27;


// a is the largest

if (a>b && a>c && a>d){
    if(b>c && b>d){
        if (c>d){
            console.log("a>b>c>d");
        }else{
            console.log("a>b>d>c");
        }
    }else if(b<d && b>c){
        console.log("a>d>b>c");
    }else if (b<c && b>d){
        console.log("a>c>b>d");
    }else if(b<c && b<d){
        if(c>d){
            console.log("a>c>d>b");
        }else{
            console.log("a>d>c>b");
        }
    }
}

// b the largest
else if (b > a && b > c && b > d) {
    if (a > c && a > d) {
      if (c > d) {
        console.log("b>a>c>d");
      } else {
        console.log("b>a>d>c");
      }
    } else if (a < d && a > c) {
      console.log("b>d>a>c");
    } else if (a < c && a > d) {
      console.log("b>c>a>d");
    } else if (a < c && a < d) {
      if (c > d) {
        console.log("b>c>d>a");
      } else {
        console.log("b>d>c>a");
      }
    }
  }

  //c the largest
if (c > a && c > b && c > d) {
    if (b > a && b > d) {
      if (a > d) {
        console.log("c>b>a>d");
      } else {
        console.log("c>b>d>a");
      }
    } else if (b < d && b > a) {
      console.log("c>d>b>a");
    } else if (b < a && b > d) {
      console.log("c>a>b>d");
    } else if (b < a && b < d) {
      if (a > d) {
        console.log("c>a>d>b");
      } else {
        console.log("c>d>a>b");
      }
    }
  }
  //d the largest
  if (d > a && d > b && d > c) {
    if (b > c && b > a) {
      if (c > a) {
        console.log("d>b>c>a");
      } else {
        console.log("d>b>a>c");
      }
    } else if (b < a && b > c) {
      console.log("d>a>b>c");
    } else if (b < c && b > a) {
      console.log("d>c>b>a");
    } else if (b < c && b < a) {
      if (c > a) {
        console.log("d>c>a>b");
      } else {
        console.log("d>a>c>b");
      }
    }
  }
  