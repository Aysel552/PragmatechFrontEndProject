//input

let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = [names, surnames, ages]

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34

console.log(`Ad: ${students[0][0]}, Soyad: ${students[1][0]}, Yas: ${students[2][0]}`);
console.log(`Ad: ${students[0][1]}, Soyad: ${students[1][1]}, Yas: ${students[2][1]}`);



