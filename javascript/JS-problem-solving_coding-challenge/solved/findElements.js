// Find elements
const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, word) {
  return array.includes(word);
}

console.log(doesWordExist(wordsFind, "truth"));
console.log(doesWordExist(wordsFind, "serco"));
console.log(doesWordExist(wordsFind, "eating"));
