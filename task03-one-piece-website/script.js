"use strict"
// hamburger menu

const menuIcon = document.querySelector(".header__icon--menu");
const xIcon = document.querySelector(".header__icon--x");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", openMenu);
xIcon.addEventListener("click", closeMenu)

function openMenu() {
  menuIcon.classList.add("hidden");
  xIcon.classList.add("visible");
  menu.classList.add("visible");
}

function closeMenu() {
  menuIcon.classList.remove("hidden");
  xIcon.classList.remove("visible");
  menu.classList.remove("visible");
}

// read all synopsis

const btnSynopsis = document.querySelector(".synopsis__button");
const synopsis = document.querySelector(".synopsis");
const text = document.querySelectorAll(".synopsis__text--read-all");
const logo = document.querySelector(".synopsis__logo");
const opCharacters = document.querySelector(".op-characters");
let btnClicked = true;
btnSynopsis.addEventListener("click", clickSynopsis);

function readAll() {
  btnSynopsis.classList.add("clicked");
  synopsis.classList.add("read-all");
  logo.classList.add("visible");
  opCharacters.classList.add("read-all");
  for (let index = 0; index < text.length; index++) {
    text[index].classList.add("visible");
  }
}

function readLess() {
  btnSynopsis.classList.remove("clicked");
  synopsis.classList.remove("read-all");
  logo.classList.remove("visible");
  opCharacters.classList.remove("read-all");
  for (let index = 0; index < text.length; index++) {
    text[index].classList.remove("visible");
  }
}

function clickSynopsis() {
  btnClicked ? readAll() : readLess();
  btnClicked = !btnClicked;
}
