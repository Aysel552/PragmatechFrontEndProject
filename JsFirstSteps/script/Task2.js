// x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir)

x =  "Hello";

function defineType(){
    if (typeof x === "string"){
        alert(`${x} is a string`);
    } 
    else{
        alert(`${x} is a number`)
    }
    
}

defineType();