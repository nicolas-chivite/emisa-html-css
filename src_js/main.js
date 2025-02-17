window.onload = async (event) => {
  fetch("heroes.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      heroes(json);
      heroesHeader(json);
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`));

  const heroesHeader = (json) => {
    const title = document.querySelector("header");
    const textTitle = document.createElement("h1");
    textTitle.textContent = json.squadName;
    title.appendChild(textTitle);

    const subTitle = document.createElement("p");
    subTitle.textContent =
      "Hometown: " + json.homeTown + " // Formed: " + json.formed;
    title.appendChild(subTitle);
  };

  const heroes = (json) => {
    const heroesList = json["members"];
    const heroesTable = document.querySelector("tbody");
    for (const hero of heroesList) {
      heroesTable.appendChild(createRow(hero));
    }
  };

  const createCol = (heroes) => {
    const col = document.createElement("td");
    col.textContent = heroes;
    return col;
  };

  const createRow = (hero) => {
    const row = document.createElement("tr");
    row.appendChild(createCol(hero.name));
    row.appendChild(createCol(hero.age));
    row.appendChild(createCol(hero.secretIdentity));
    row.appendChild(createCol(hero.powers));
    return row;
  };
};
