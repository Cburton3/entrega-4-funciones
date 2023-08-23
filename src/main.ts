
function enter() : void {
  const element = document.querySelector(".numero-turno");
  const number = document.getElementById('input-number') as HTMLInputElement;
  const text = document.querySelector(".texto-turno");

  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement &&
    number !== null &&
    number !== undefined &&
    number instanceof HTMLElement
  ) {
    element.textContent = number.value;
    let currentNumber = parseInt(element.innerText);
    element.innerText = `${currentNumber}`.padStart(2, "0");
  } else if (text !== null && text !== undefined && text instanceof HTMLElement) {
    text.textContent = "Por favor, pon un número";
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
    let currentNumber = parseInt(element.innerText); //inner text here just gets you the string text between teh two tags. the inner text part is just referncing it
    //curretNumber is coverted to a number in order to run the ++ operation 
    element.textContent = `${++currentNumber}`.padStart(2, "0"); //as using the .padstart you'd be referencing the currentNumber.padstart instead of 'currnetNumber and then applying the padstart to it.
    //We convert the number back to a stringinorder to run teh padstart op which needs a string
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

