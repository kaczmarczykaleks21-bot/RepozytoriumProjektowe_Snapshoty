"use strict";

import { fetchSkills, fetchEducation, fetchExperience } from "./fetch.js";
import {
  renderHardSkills,
  renderSoftSkills,
  renderMyCourses,
  renderPersonalProjects,
  renderTechnoStack,
  renderTechnologicalDevelopmentProjects,
  renderUniProjects,
  renderLanguages,
} from "./render.js";
import { initComments } from "./comments.js";
initComments();
// === ZMIENNE ===
const stylesheet = document.getElementById("stylesheet");
const toggleStyleBtn = document.getElementById("toggleStyleBtn");
let isRed = true;

const addCommentBtn = document.getElementById("addCommentBtn");
const displaySectionBtn = document.getElementById("displaySectionBtn");
const sectionExperience = document.getElementById("experience-container");
let isExperienceDisplayed = true;

// Funkcja do zmiany stylu strony
function changeStyle() {
  if (isRed) {
    stylesheet.href = "./stylesheets/green.css";
    isRed = false;
  } else {
    stylesheet.href = "./stylesheets/red.css";
    isRed = true;
  }
}

// Funkcja do ukrywania sekcji doświadczenie
function displayExperience() {
  if (isExperienceDisplayed) {
    displaySectionBtn.classList.remove("fa-angle-down");
    displaySectionBtn.classList.add("fa-angle-up");
    sectionExperience.classList.add("hidden");
    isExperienceDisplayed = false;
  } else {
    displaySectionBtn.classList.remove("fa-angle-up");
    displaySectionBtn.classList.add("fa-angle-down");
    sectionExperience.classList.remove("hidden");

    isExperienceDisplayed = true;
  }
}

// CONTACT ME FORM
function goToContactForm() {
  window.location.href = "pages/contactMe.html";
}

// EVENT PO KLIKNIECIU GUZIKA DO ZMIANY STYLU
toggleStyleBtn.addEventListener("click", () => {
  changeStyle();
});

displaySectionBtn.addEventListener("click", () => {
  displayExperience();
});

// addCommentBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("Dodano komentarz!"); // ZAMIAST TEGO FUNKCJA
// });

// #region INICJALIZACJA DANYCH
// Skills

async function initSkills() {
  try {
    const data = await fetchSkills();

    renderHardSkills(data);
    renderSoftSkills(data);
  } catch (err) {
    console.log("initSkills Failed!");
  }
}

// Education

async function initEducation() {
  try {
    const data = await fetchEducation();
    renderTechnoStack(data);
    renderLanguages(data);
    renderMyCourses(data);
  } catch (err) {
    console.log("initEducation Failed!");
  }
}

// Experience

async function initExperience() {
  try {
    const data = await fetchExperience();
    renderPersonalProjects(data);
    renderUniProjects(data);
    renderTechnologicalDevelopmentProjects(data);
  } catch (err) {
    console.log("initExperience Failed!");
  }
}

initSkills();
initEducation();
initExperience();

// #endregion
