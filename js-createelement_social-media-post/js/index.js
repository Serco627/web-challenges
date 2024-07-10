console.clear();
const body = document.querySelector('[data-js="body"]');

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const newPost = document.createElement("article"); // Erstelle die Elemente
const postContent = document.createElement("p");
const footer = document.createElement("footer");
const footerContent = document.createElement("span");
const like = document.createElement("button");

newPost.classList.add("post"); // Füge die Klassen hinzu
body.append(newPost);

postContent.classList.add("post__content");
postContent.textContent = // Setze den Inhalt
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

newPost.append(postContent); // Baue die Struktur zusammen

footer.classList.add("post__footer");
newPost.append(footer);

footerContent.classList.add("post__username");
footerContent.textContent = "@username";
footer.append(footerContent);

like.classList.add("post__button");
like.textContent = "♥ Like";
footer.append(like);

like.addEventListener("click", handleLikeButtonClick);

// Erstelle die Elemente
// const newPost = document.createElement("article");
// const postContent = document.createElement("p");
// const footer = document.createElement("footer");
// const footerContent = document.createElement("span");
// const like = document.createElement("button");

// // Füge die Klassen hinzu
// newPost.classList.add("post");
// postContent.classList.add("post__content");
// footer.classList.add("post__footer");
// footerContent.classList.add("post__username");
// like.classList.add("post__button");

// // Setze den Inhalt
// postContent.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
// footerContent.textContent = "@username";
// like.textContent = "♥ Like";

// // Baue die Struktur zusammen
// body.append(newPost);
// newPost.append(postContent);
// newPost.append(footer);
// footer.append(footerContent);
// footer.append(like);

// // Füge den Event-Listener hinzu
// like.addEventListener("click", handleLikeButtonClick);
