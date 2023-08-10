
const element = document.querySelector(".numero-turno");
let currentNumber = parseInt(element?.innerText);
const text = document.querySelector(".texto-turno");

function nextNumber(): void {
  currentNumber = ++currentNumber;
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement &&
    text !== null &&
    text !== undefined &&
    text instanceof HTMLElement
  ) {
    element.innerText = `${currentNumber}`.padStart(2, "0");
    text.innerText = "Por favor, acérquese al mostrador";
  }
}

function previousNumber(): void {
  if (currentNumber > 0) {
    if (
      element !== null &&
      element !== undefined &&
      element instanceof HTMLHeadingElement &&
      text !== null &&
      text !== undefined &&
      text instanceof HTMLElement
    ) {
      currentNumber = --currentNumber;
      element.innerText = `${currentNumber}`.padStart(2, "0");
      text.innerText = "Ya siendo atentido";
    }
  }
}

function resetNumber() : void {
  currentNumber = 0;
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement &&
    text !== null &&
    text !== undefined &&
    text instanceof HTMLElement
  ) {
    element.innerText = `${currentNumber}`.padStart(2, "0");
    text.innerText = "Espere a ser atendido";
  }
}

const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");
const resetButton = document.getElementById("reset");

nextButton?.addEventListener("click", () => nextNumber());
backButton?.addEventListener("click", () => previousNumber());
resetButton?.addEventListener("click", () => resetNumber());
