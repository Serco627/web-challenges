import { getRandomColor } from "../../utils/randomColor.js";

export default function Circle() {
  const circleELement = document.createElement("div");
  circleELement.classList.add("circle");
  circleELement.addEventListener("click", () => {
    circleELement.style.backgroundColor = getRandomColor();
  });
  return circleELement;
}
