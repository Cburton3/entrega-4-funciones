// const enterButton = document.getElementById("enter");
// if (
//   enterButton !== null &&
//   enterButton !== undefined &&
//   enterButton instanceof HTMLButtonElement
// ) {
//   enterButton.addEventListener("click", enter);
// }
// function enter() {}

function nextNumber(): void {
  const element = document.querySelector(".numero-turno");
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement
  ) {
    let currentNumber = parseInt(element.innerText);
    element.innerText = `${++currentNumber}`.padStart(2, "0");
    // element.innerText = "Por favor, acérquese al mostrador";
  }
}

function previousNumber(): void {
  const element = document.querySelector(".numero-turno");
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement
  ) {
    let currentNumber = parseInt(element.innerText);
    if (currentNumber > 0) {
      currentNumber = --currentNumber;
      element.innerText = `${currentNumber}`.padStart(2, "0");
      const text = document.querySelector(".texto-turno");
      if (text !== null && text !== undefined && text instanceof HTMLElement) {
        text.innerText = "Ya siendo atentido";
      }
    }
  }
}

function resetNumber(): void {
  const element = document.querySelector(".numero-turno");
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement
  ) {
    let currentNumber = parseInt(element.innerText);
    currentNumber = 0;

    {
      element.innerText = `${currentNumber}`.padStart(2, "0");
      const text = document.querySelector(".texto-turno");
      if (text !== null && text !== undefined && text instanceof HTMLElement) {
        text.innerText = "Espere a ser atendido";
      }
    }
  }
}
const nextButton = document.getElementById("next");
if (
  nextButton !== null &&
  nextButton !== undefined &&
  nextButton instanceof HTMLHeadingElement
) {
  nextButton.addEventListener("click", () => nextNumber());
}

const backButton = document.getElementById("back");
if (
  backButton !== null &&
  backButton !== undefined &&
  backButton instanceof HTMLHeadingElement
) {
  backButton.addEventListener("click", () => previousNumber());
}
const resetButton = document.getElementById("reset");
if (
  resetButton !== null &&
  resetButton !== undefined &&
  resetButton instanceof HTMLHeadingElement
) {
  resetButton.addEventListener("click", () => resetNumber());
}
