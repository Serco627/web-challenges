import { getRandomColor } from "../../utils/randomColor.js";

export default function Square() {
  const squareELement = document.createElement("div");
  squareELement.classList.add("square");
  squareELement.addEventListener("click", () => {
    squareELement.style.backgroundColor = getRandomColor();
  });
  return squareELement;
}
