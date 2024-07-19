console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "Serco123";

const receivedPassword = "passwort123";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Serco627.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 10;
if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// console.log(number % 2 === 0 ? "Gerade Zahl" : "Ungerade Zahl");git

// Part 3: Hotdogs
const numberOfHotdogs = 995000;
//NEW CODE
if (numberOfHotdogs <= 5) {
  console.log("2 euros per hotdog please");
} else if (numberOfHotdogs <= 100) {
  console.log("1.50 euros per hotdog please");
} else if (numberOfHotdogs <= 1000000) {
  console.log("1 euro per hotdog please");
} else {
  console.log("0.10 euro per hotdog please");
}

// OLD CODE
// if (numberOfHotdogs >= 10000) {
//   console.log("0,10€");
// } else if (numberOfHotdogs >= 1000) {
//   // Hier wurde die Bedingung geändert
//   console.log("1€");
// } else if (numberOfHotdogs >= 100) {
//   // Diese Bedingung ist jetzt korrekt
//   console.log("1.50€");
// } else if (numberOfHotdogs >= 5) {
//   console.log("2€");
// } else {
//   console.log("4€");
// }

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting

const coachName = "Dominik";
const randomName = "Serco";

const greeting = "Hello " + (randomName === coachName ? "Coach" : randomName);
console.log(greeting);
