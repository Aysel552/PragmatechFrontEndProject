
// verilən kəsirli ədədin (nümumə: 4.234) tam hissəsi ilə kəsirli hissəsini ayrı ayrı ekrana çap edən program yazın

let a = 4.234;

function Calculate(){
    let fractionalNumber = Math.floor(a);
    let fractionalPart = a- fractionalNumber;
    console.log(fractionalNumber);
    console.log(fractionalPart);
    
}

Calculate();