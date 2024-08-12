// Unique arrays - return an array without duplicates

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

function uniquifyArray(words) {
  let newArray = [];
  words.forEach((word) => {
    if (!newArray.includes(word)) {
      newArray.push(word);
    }
  });
  return newArray;
}

console.log(uniquifyArray(words3));
