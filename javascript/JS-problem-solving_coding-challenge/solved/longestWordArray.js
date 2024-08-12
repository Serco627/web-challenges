const words = [
  "Jaws",
  "Up",
  "Alien",
  "Gravity",
  "Inception",
  "Psycho",
  "Communication",
]; // output: Inception

// function getLongestWord(array) {
//   let currentLongestWord = "";
//   for (let i = 0; i <= array.length - 1; i++) {
//     const currentWordArray = array[i];
//     if (currentWordArray.length > currentLongestWord.length) {
//       currentLongestWord = currentWordArray;
//     }
//   }
//   return currentLongestWord;
// }
// console.log(getLongestWord(words));

function longestWord(array) {
  let currentLongestWord = "";
  array.forEach((word) => {
    if (word.length > currentLongestWord.length) {
      currentLongestWord = word;
    }
  });
  return currentLongestWord;
}

console.log(longestWord(words));
