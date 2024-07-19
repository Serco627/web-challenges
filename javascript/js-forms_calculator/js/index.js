console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result;

  const operator = document.querySelector(
    'input[name="operator"]:checked'
  ).value;

  const number1 = document.querySelector("#number-a").value;
  const number2 = document.querySelector("#number-b").value;
  const a = Number(number1);
  const b = Number(number2);

  if (operator === "addition") {
    result = add(a, b);
  } else if (operator === "subtraction") {
    result = subtract(a, b);
  } else if (operator === "multiplication") {
    result = multiply(a, b);
  } else if (operator === "division") {
    result = divide(a, b);
  }
  resultOutput.textContent = result;
});
