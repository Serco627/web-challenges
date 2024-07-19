console.clear();
// Use JavaScript to react to the form submission.

// Log all form data (in object form) into the console in the submit event handler.

// Make sure the form is reset and the First Name input is focused after submission.

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const age = Number(data.age);
  const badness = Number(data.badness);
  const firstName = data.firstName;
  const ageBadnessSum = age + badness;
  console.log(`The age-badness-sum of ${firstName} is ${ageBadnessSum}`);
  event.target.reset();
  event.target.elements.firstName.focus();
});

// ## Bonus: Calculate and log the age-badness-sum 🤷‍♀️

// The formula is: `age + badness`

// Log to the console _(replace the values between the quotes)_:

// > The age-badness-sum of "firstName" is "age-badness-sum"
