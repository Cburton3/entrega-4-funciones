const element = document.querySelector(".numero-turno");
let currentNumber = parseInt(element.innerText);
const text = document.querySelector(".texto-turno");
const number = document.getElementById('input-number');

function nextNumber() {
  currentNumber = ++currentNumber;
  element.innerText = `${currentNumber}`.padStart(2, "0");
  text.innerText = 'Por favor, acérquese al mostrador';

}

function previousNumber() {
  if (currentNumber > 0) {
    currentNumber = --currentNumber;
    element.innerText = `${currentNumber}`.padStart(2, "0");
    text.innerText = 'Ya siendo atentido';
  }
}

function resetNumber() {
  currentNumber = 0;
  element.innerText = `${currentNumber}`.padStart(2, "0");
  text.innerText = 'Espere a ser atendido';
}

function enterNumber() {
  element.textContent = `${number.value}`.padStart(2, "0");
}

const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");
const resetButton = document.getElementById("reset");
const enterButton = document.getElementById("enter");

nextButton.addEventListener("click", () => nextNumber());
backButton.addEventListener("click", () => previousNumber());
resetButton.addEventListener("click", () => resetNumber());
enterButton.addEventListener("click", () => enterNumber());
