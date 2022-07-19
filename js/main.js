"use strict";
//Variables globales
const input = trackEl(".js-input");

const clue = trackEl(".js-pista");

const counter1 = trackEl(".js-contador");

const button = trackEl(".js-button");

let counter = 1;

//Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);

function handleClick(event) {
  event.preventDefault();
  const inputValue = input.value;
  const inputInt = parseInt(inputValue);
  console.log(inputInt);

  counter1.innerHTML = `${counter++}`;
  if (inputInt === randomNumber) {
    clue.innerHTML = "Has ganado campeona";
  }
  if (inputInt > randomNumber) {
    clue.innerHTML = "Demasiado alto";
  }
  if (inputInt < randomNumber) {
    clue.innerHTML = "Demasiado bajo";
  }
  if (inputInt > 100 || inputInt < 1) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
  }
}

function trackEl(selector) {
  const selected = document.querySelector(selector);
  if (selected === "") {
    console.log(
      `No existe ningun elemento con clase, id o tag llamado ${selector}`
    );
  }
  return selected;
}

//Eventos
button.addEventListener("click", handleClick);
