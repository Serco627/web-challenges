// Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
  "serco",
  "serco",
  "serco",
  "serco",
  "serco",
];

function howManyTimes(array, searchingWord) {
  let count = 0;
  array.forEach((word) => {
    if (word === searchingWord) {
      count++;
    }
  });
  return count;
}

console.log(howManyTimes(wordsCount, "matter"));
