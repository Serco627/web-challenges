console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentHour = new Date().getHours();
  // ich habe die && und die größer gleich zeichen vergessen
  if (currentHour >= 6 && currentHour <= 12) {
    return "Good morning";
  } else if (currentHour >= 13 && currentHour <= 18) {
    return "Good Afternoon";
  } else if (currentHour >= 19 && currentHour <= 22) {
    return "Good evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  const weekDay = new Date().getDay();
  if (weekDay === 1) {
    return "darkgray";
  } else if (weekDay >= 2 && weekDay <= 5) {
    return "blue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting(); // je nachdem wie spät es ist, wird ein anderer text in den TextContent eingegeben
document.body.style.backgroundColor = getDayColor(); //return wert von der funktion wird je nach wochentag hier als backgroundcolor angegeben
