console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch("https://swapi.py4e.com/api/people");
  const data = await response.json();

  const characters = data.results;
  console.log(characters);
  characters.forEach((character) => {
    console.log("Character Name:", character.name);
  });
  console.log(characters[2].eye_color);
}

fetchData();
