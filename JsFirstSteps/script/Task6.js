// 3 nöqtənin koordinatları verilir.Bu verilən koordinatlara görə a nöqtəsinə ən yaxın nöqtəni tapan proqram yazın

// a_x=120,a_y=200
// b_x=230,b_y=400
// c_x=210,c_y=345

let a_x = 120;
let a_y = 200;
let b_x = 230;
let b_y = 400;
let c_x = 210;
let c_y = 345;

let b_a_difference = Math.sqrt((b_x - a_x)**2 + (b_y - a_y)**2);
let c_a_difference = Math.sqrt((c_x - a_x)**2 + (c_y - a_y)**2);

if(b_a_difference > c_a_difference){
    console.log ('c is closer to a')
}else{
    console.log("b is closer to a")
}
