// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
  let sumAllNumbers = 0;
  for (let i = 0; i <= numbersArray.length - 1; i++) {
    let currentNumber = numbersArray[i];
    sumAllNumbers += currentNumber;
  }
  return sumAllNumbers;
}

console.log(sumNumbers(numbers));

/* 
Aufgabe: das Ganze Array mit den Werten zusammenrechnen
- über jedes element im array schauen
- den value aus jedem element nehmen
- zusammenrechnen lassen
- am ende das endergebnis returnen
*/

// Version 2 mit Reduce (kürzer)
function sumNumbers2(numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sumNumbers2(numbers));
