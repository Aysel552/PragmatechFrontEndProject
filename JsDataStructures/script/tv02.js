// input

let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = {
    adlar: names,
    soyadlar: surnames,
    yaslar: ages
}

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

// 1st Option:
console.log("Ad: " + students["adlar"]["0"] + " Soyad: " + students["soyadlar"][0] + " Yas: " + students["yaslar"][0])
console.log("Ad: " + students["adlar"]["1"] + " Soyad: " + students["soyadlar"][1] + " Yas: " + students["yaslar"][1])
console.log("Ad: " + students["adlar"]["2"] + " Soyad: " + students["soyadlar"][2] + " Yas: " + students["yaslar"][2])
console.log("Ad: " + students["adlar"]["3"] + " Soyad: " + students["soyadlar"][3] + " Yas: " + students["yaslar"][3])
console.log("Ad: " + students["adlar"]["4"] + " Soyad: " + students["soyadlar"][4] + " Yas: " + students["yaslar"][4])

// 2nd Option:

for(let i = 0; i < students.length; i++){
  console.log("Ad: " + students[i].adlar + "  Soyad: " + students[i].soyadlar + "  Yas: " + students[i].yaslar)
}

