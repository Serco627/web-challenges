console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

const bookTitle = "The Lord of Javascript";
const author = "Mario";
let rating = 4.2;
let numberOfSales = 120;

console.log(`Title: ${bookTitle}`);
console.log(`Author: ${author}`);
console.log(`Rating: ${rating}`);
console.log(`Sales: ${numberOfSales}`);

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

numberOfSales += 120;
rating = 10.5;

console.log(numberOfSales);
console.log(rating);

/*
3: This code is quite repetitive and hard to read.
increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData() {
  console.log(`Title: ${bookTitle}`);
  console.log(`Author: ${author}`);
  console.log(`Rating: ${rating}`);
  console.log(`Sales: ${numberOfSales}`);
}

logBookData();

numberOfSales += 100;
rating = 12.5;

logBookData();
