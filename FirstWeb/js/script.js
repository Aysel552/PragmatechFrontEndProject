let body = document.querySelector(".mainContainer");
let text = document.querySelector("#text"); // eat id element
let phrase = document.querySelector("#phrase"); // drink id element
let sentence = document.querySelector("#sentence"); //visit id element

// let images = ['image1','image2'] then use for or foreach
// how to select id and class with JS
// console.log or alert


text.addEventListener("mouseover", changeEatImage);
text.addEventListener("mouseout", returnInitialImage);

phrase.addEventListener("mouseover", changeDrinkImage);
phrase.addEventListener("mouseout", returnInitialImage);

sentence.addEventListener("mouseover", changeVisitImage);
sentence.addEventListener("mouseout", returnInitialImage);

function returnInitialImage() {
    body.style.backgroundImage = "url('/img/background.jpg')"
}

function changeEatImage() {
    body.style.backgroundImage = "url('/img/eat.jpeg')"
}

function changeDrinkImage() {
    body.style.backgroundImage = "url('/img/drink.jpeg')"
}
function changeVisitImage() {
    body.style.backgroundImage = "url('/img/visit.jpeg')"
}
