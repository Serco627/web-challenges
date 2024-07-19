console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  if (card.id == "0") {
    return card;
  }
});
console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => {
  if (card.tags.length === 3) {
    return card;
  }
});
console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  if (card.isBookmarked === false) {
    return card;
  }
});
console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    card.isBookmarked === true &&
    (card.tags.includes("html") || card.tags.includes("js"))
  );
});
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
