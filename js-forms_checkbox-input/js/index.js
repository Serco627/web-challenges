console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function checkboxChecker() {
  if (tosCheckbox.checked) {
    return hideTosError();
  } else {
    return showTosError();
  }
}
tosCheckbox.addEventListener("click", checkboxChecker);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (tosCheckbox.checked) {
    hideTosError();
    alert("Form submitted");
    showSuccess();
  } else {
    alert("You didn't accept the terms of service");
  }
  event.target.reset();
});

const success = document.querySelector('[data-js="success"]');

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

// Write JavaScript code to only show the div if the submission was valid
// (`tos` checkbox was checked). Like the error message, it should also be hidden initially.
