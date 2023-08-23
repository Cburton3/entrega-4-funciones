
function enter() : void {
  const element = document.querySelector(".numero-turno");
  const number = document.getElementById('input-number') as HTMLInputElement;
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement &&
    number !== null &&
    number !== undefined &&
    number instanceof HTMLElement
  ) {
    element.textContent = number.value;
    // let currentNumber = parseInt(element.innerText);
    // element.innerText = `${currentNumber}`.padStart(2, "0");
    // currentNumber = number.value;
  }
}

const enterButton = document.getElementById("enter");
if (
  enterButton !== null &&
  enterButton !== undefined &&
  enterButton instanceof HTMLButtonElement
) {
  enterButton.addEventListener("click", enter);
}

function nextNumber(): void {
  const element = document.querySelector(".numero-turno");
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement
  ) {
    let currentNumber = parseInt(element.innerText);
    element.textContent = `${++currentNumber}`.padStart(2, "0");
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
      element.textContent = `${currentNumber}`.padStart(2, "0");
      const text = document.querySelector(".texto-turno");
      if (text !== null && text !== undefined && text instanceof HTMLElement) {
        text.textContent = "Ya siendo atentido";
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
        text.textContent = "Espere a ser atendido";
      }
    }
  }
}
const nextButton = document.getElementById("next");
if (
  nextButton !== null &&
  nextButton !== undefined &&
  nextButton instanceof HTMLButtonElement
) {
  nextButton.addEventListener("click", () => nextNumber());
}

const backButton = document.getElementById("back");
if (
  backButton !== null &&
  backButton !== undefined &&
  backButton instanceof HTMLButtonElement
) {
  backButton.addEventListener("click", () => previousNumber());
}
const resetButton = document.getElementById("reset");
if (
  resetButton !== null &&
  resetButton !== undefined &&
  resetButton instanceof HTMLButtonElement
) {
  resetButton.addEventListener("click", () => resetNumber());
}

