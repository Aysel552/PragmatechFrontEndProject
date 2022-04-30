"use strict";
function select(e) {
  let movieName = `<i class="fa-regular fa-circle-check"></i>`;
  if (e.target.children.length == 0) {
    e.target.insertAdjacentHTML("beforeend", movieName);

    e.target.setAttribute("class", "activeName");
  } else {
    e.target.children[0].remove();
    e.target.classList.remove("activeName");
  }
}