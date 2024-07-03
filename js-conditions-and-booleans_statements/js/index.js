console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "Serco123";

const receivedPassword = "passwort123";

// Part 2: Even / Odd
const number = 9;

// Part 3: Hotdogs
const numberOfHotdogs = 10000000000;

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Serco";

const greeting = "Hello " + (userName === "Esraa" ? "Coach" : userName);

console.log(greeting);

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Serco627.");
} else {
  console.log("Access denied!");
}

if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// console.log(number % 2 === 0 ? "Gerade Zahl" : "Ungerade Zahl");

if (numberOfHotdogs >= 10000) {
  console.log("0,10€");
} else if (numberOfHotdogs >= 1000) {
  // Hier wurde die Bedingung geändert
  console.log("1€");
} else if (numberOfHotdogs >= 100) {
  // Diese Bedingung ist jetzt korrekt
  console.log("1.50€");
} else if (numberOfHotdogs >= 5) {
  console.log("2€");
} else {
  console.log("4€");
}

const result = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(result);

console.log();
