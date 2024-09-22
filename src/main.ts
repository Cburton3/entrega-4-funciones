function enter(): void {
  const element = document.querySelector(".turn-number");
  const number = document.getElementById("input-number") as HTMLInputElement;
  const text = document.querySelector(".turn-text");

  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement &&
    number !== null &&
    number !== undefined &&
    number instanceof HTMLElement
  ) {
    element.textContent = number.value; //here its still a string
    let currentNumber = parseInt(element.innerText); //here its a number so we can use parseInt
    element.innerText = `${currentNumber}`.padStart(2, "0");
  } else if (
    text !== null &&
    text !== undefined &&
    text instanceof HTMLElement
  ) {
    text.textContent = "Please introduce number";
  }
}

//re text content  returns all the text within an element, including text in hidden elements
// innerText respects the styles and layout of the page

function nextNumber(): void {
  const element = document.querySelector(".turn-number");
  const text = document.querySelector(".turn-text");
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement &&
    text !== null &&
    text !== undefined &&
    text instanceof HTMLElement
  ) {
    let currentNumber = parseInt(element.innerText);
    //parseInt converts a string into an integer
    //inner text here just gets you the string text between teh two tags. the inner text part is just referncing it
    //curretNumber is coverted to a number in order to run the ++ operation
    element.textContent = `${++currentNumber}`.padStart(2, "0");
    //pad start adding soemthing/padding/number (in this case) before the string (looks better)
    //as using the .padstart you'd be referencing the currentNumber.padstart instead of 'currnetNumber and then applying the padstart to it.
    //We convert the number back to a stringinorder to run teh padstart op which needs a string
    text.textContent = "Please proceed to the front desk";
  }
}

function previousNumber(): void {
  const element = document.querySelector(".turn-number");
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement
  ) {
    let currentNumber = parseInt(element.innerText);
    if (currentNumber > 0) {
      currentNumber = --currentNumber;
      element.textContent = `${currentNumber}`.padStart(2, "0");
      const text = document.querySelector(".turn-text");
      if (text !== null && text !== undefined && text instanceof HTMLElement) {
        text.textContent = "Being served";
      }
    }
  }
}

function resetNumber(): void {
  const element = document.querySelector(".turn-number");
  if (
    element !== null &&
    element !== undefined &&
    element instanceof HTMLHeadingElement
  ) {
    let currentNumber = parseInt(element.innerText);
    currentNumber = 0;

    {
      element.innerText = `${currentNumber}`.padStart(2, "0");
      const text = document.querySelector(".turn-text");
      if (text !== null && text !== undefined && text instanceof HTMLElement) {
        text.textContent = "Please wait to be served";
      }
    }
  }
}
//buttons

const enterButton = document.getElementById("enter");
if (
  enterButton !== null &&
  enterButton !== undefined &&
  enterButton instanceof HTMLButtonElement
) {
  enterButton.addEventListener("click", enter);
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
