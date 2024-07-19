/* Sub-Challenge 1
Implement the following functionality: The value of the first input field is copied into the second input field on button click */

const firstCopyInput = document.querySelector("[data-js=first-copy-input]");
const secondCopyInput = document.querySelector("[data-js=second-copy-input]");
const copyButton = document.querySelector("[data-js=copy-button]");

function copy() {
  const copiedInput = firstCopyInput.value;
  secondCopyInput.value = copiedInput;
}

copyButton.addEventListener("click", copy);

/* Sub-Challenge 2
Implement the following functionality: The value of the first input field is copied in uppercase into the second input field on button click */

const firstCopyInUppercaseInput = document.querySelector(
  "[data-js=first-copy-uppercase-input]"
);
const secondCopyInUppercaseInput = document.querySelector(
  "[data-js=second-copy-uppercase-input]"
);
const copyInUppercaseButton = document.querySelector(
  "[data-js=copy-uppercase-button]"
);

function copyAndUpperCase() {
  const copied = firstCopyInUppercaseInput.value.toUpperCase();
  secondCopyInUppercaseInput.value = copied;
}

copyInUppercaseButton.addEventListener("click", copyAndUpperCase);

/* Sub-Challenge 3
Implement the following functionality: The values of the two input fields switch on button click */

const firstSwitchValueInput = document.querySelector(
  "[data-js=first-switch-value-input]"
);
const secondSwitchValueInput = document.querySelector(
  "[data-js=second-switch-value-input]"
);
const switchValueButton = document.querySelector(
  "[data-js=switch-value-button]"
);

switchValueButton.addEventListener("click", switchValues);

function switchValues() {
  const value1 = firstSwitchValueInput.value;
  firstSwitchValueInput.value = secondSwitchValueInput.value;
  secondSwitchValueInput.value = value1;
}
