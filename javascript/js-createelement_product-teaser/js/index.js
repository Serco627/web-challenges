console.clear();
const body = document.querySelector("[data-js='body']");
const productName = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const newCard = document.createElement("article");
newCard.classList.add("product");

newCard.innerHTML = `

<div class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">${productName}</h2>
          <ul class="product__categories">
            <li class="product__category">${category1}</li>
            <li class="product__category">${category2}</li>
            <li class="product__category">${category3}</li>
          </ul>
          <p class="product__description">
          ${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src= "${imageSrc}"
            alt=""
          />
        </div>
      </div>
      <footer class="product__footer">
        <span class="product__price">${price}</span>
        <button type="button" class="product__buy-button">Buy</button>
      </footer>
`;

body.append(newCard);

const buyButton = newCard.querySelector("button");

buyButton.addEventListener("click", () => {
  alert(`The price for the ${productName} is ${price}. Click Ok to buy :)`);
});

//   This exercise includes an example of a product teaser for an online shop. Please append a second product teaser to the page with JavaScript based on the data given in the `index.js` file.

// Use `.innerHTML` to generate the HTML elements for the teaser. Use string interpolation to include the given data into the HTML.

// Add an event listener to the "buy" button of the second product teaser. When clicking the button, the product's name and price should be logged to the console.
