console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  let yPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let webpageHeight = document.body.clientHeight;
  let totalScrollHeight = webpageHeight - windowHeight;
  let currentScrollPercentage = (yPosition / totalScrollHeight) * 100;
  return currentScrollPercentage;
}

document.addEventListener("scroll", () => {
  // Berechne den Scroll-Prozentsatz, wenn der Benutzer scrollt
  const scrollPercentage = calculateScrollPercentage();
  // Aktualisiere die Breite der Progress Bar
  progressBar.style.width = scrollPercentage + "%";
});

//1.	Die Funktion calculateScrollPercentage berechnet den Scroll-Prozentsatz und gibt ihn zurück.
//2.	Der Event Listener ruft diese Funktion auf, speichert den zurückgegebenen Wert in einer Variablen und verwendet diesen Wert, um die Breite der Progress Bar zu aktualisieren.
