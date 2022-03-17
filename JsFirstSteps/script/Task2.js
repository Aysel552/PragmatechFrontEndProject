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