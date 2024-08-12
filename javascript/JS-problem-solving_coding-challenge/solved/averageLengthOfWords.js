// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function handleAverageLengthOfWords(wordsArray) {
  let sumAllWords = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    // Bedingung korrigiert
    sumAllWords += wordsArray[i].length;
  }
  const averageLength = sumAllWords / wordsArray.length;
  return averageLength;
}

const averageLength = handleAverageLengthOfWords(words2);
console.log("Average length of words is:", averageLength);
