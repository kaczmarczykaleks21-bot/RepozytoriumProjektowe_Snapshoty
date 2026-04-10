"use strict";

// ZMIENNE
const stylesheet = document.getElementById("stylesheet");
const toggleStyleBtn = document.getElementById("toggleStyleBtn");
let isRed = true;

// FUNKCJA DO ZMIANY STYLU
function changeStyle() {
  if (isRed) {
    stylesheet.href = "./stylesheets/green.css";
    isRed = false;
  } else {
    stylesheet.href = "./stylesheets/red.css";
    isRed = true;
  }
}

// EVENT PO KLIKNIECIU GUZIKA DO ZMIANY STYLU
toggleStyleBtn.addEventListener("click", () => {
  changeStyle();
});
