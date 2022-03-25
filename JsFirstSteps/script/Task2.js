// x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir)

let x = prompt();
let y;
console.log(x);

    if (x === "true" || x === "false"){
        console.log("Entered value is a boolean")
        alert("Entered value is a boolean")
    }
    else{
        y = Number(x);
        if (isNaN(y)){
            console.log("Entered number is NaN")
            alert("Entered number is NaN")
        }else if (typeof y ==='number'){
            console.log("Entered value type is number")
            alert("Entered value type is number")
        }
    }
