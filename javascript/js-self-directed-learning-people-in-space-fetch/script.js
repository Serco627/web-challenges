console.log("Sanity Check");

const outPutContainer = document.querySelector("[data-js='people-in-space']");
const allButton = document.querySelector("[data-js='all']");
const issButton = document.querySelector("[data-js='iss']");
const tiangongButton = document.querySelector("[data-js='tiangong']");

let people = [];

async function fetchData() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  console.log(data);
  people = data.people;
  updateContainer(people);
}

function updateContainer(filteredPeople) {
  outPutContainer.innerHTML = "";
  filteredPeople.forEach((person) => {
    const personElement = document.createElement("p");
    personElement.textContent = `${person.name} (${person.craft})`;
    outPutContainer.append(personElement);
  });
}

allButton.addEventListener("click", () => {
  updateContainer(people);
});

issButton.addEventListener("click", () => {
  const peopleOnIss = people.filter((person) => {
    return person.craft === "ISS";
  });

  updateContainer(peopleOnIss);
});

tiangongButton.addEventListener("click", () => {
  const peopleOnTiangong = people.filter((person) => {
    return person.craft === "Tiangong";
  });
  updateContainer(peopleOnTiangong);
});

fetchData();
