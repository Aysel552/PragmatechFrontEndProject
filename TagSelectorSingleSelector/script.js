"use strict";
function select(e) {
  let x = document.querySelector(".page-container-movies-name");
  let z = `<i class="fa-regular fa-circle-check"></i>`;
  let arr = [];
  arr = x;
  if (e.target.children.length == 0) {
    e.target.insertAdjacentHTML("beforeend", z);

    e.target.setAttribute("class", "activeName");
  } else {
    e.target.children[0].remove();
    e.target.classList.remove("activeName");
  }
  for (let i = 0; i < x.children.length; i++) {
    if (e.target !== x.children[i] && x.children[i].children.length !== 0) {
      x.children[i].children[0].remove();
      x.children[i].classList.remove("activeName");
    }
  }
}