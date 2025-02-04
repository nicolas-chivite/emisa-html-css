window.onload = async (event) => {

  console.log("page is fully loaded");

  let myName = "Nico";
  let myAge = 35;

  const button = document.querySelector("button");

  button.onclick = function () {
    let name = prompt("Quel est votre nom ?");
    alert("Salut " + name + ", sympa de vous voir !");
  };

  const select = document.querySelector("select");
  const para = document.querySelector("p");
  const html = document.querySelector("body");

  select.addEventListener("change", setWeather);

  function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }

  function setWeather() {
    const choice = select.value;

    switch (choice) {
      case "sunny":
        para.textContent =
          "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
          update("yellow", "black")
        break;
      case "rainy":
        para.textContent =
          "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
          update("blue", "white")
        break;
      case "snowing":
        para.textContent =
          "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
          update("white", "black")
        break;
      case "overcast":
        para.textContent =
          "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
          update("gray", "white")
        break;
      default:
        para.textContent = "";
    }
  }

// AJOUT ETUDIANTS DANS TABLEAU VIA INPUT

  // const submit = document.getElementById("submit");

  // const addStudent = () => {
  //   const name = document.getElementById("studentName");
  //   const age = document.getElementById("studentAge");
  //   let tbody = document.getElementById("studentTable");

  //   tbody.innerHTML += 
  //   `<tr>
  //     <th>${name.value}</th>
  //     <th>${age.value}</th>
  //   </tr>`;

  // };
  // submit.addEventListener("click", addStudent);


// CONNEXION API POUR REMPLIR TABLEAU DES ETUDIANTS

  // Récupération objet du fetch
  const data = await getStudent();
    console.log(data);
  //Récupération des données de l'objet
  const studentData = data["hydra:member"];
    console.log(studentData);

  studentTable(studentData);

};

const studentTable = (studentData) => {
  for (student of studentData) {
    console.log(student);
    const tableau = document.querySelector("tbody");
    tableau.innerHTML += 
    `<tr>
      <th>${student.id}</th>
      <th>${student.firstName}</th>
      <th>${student.lastName}</th>
      <th>${student.promo}</th>
      <th>${student.course.title}</th>
    </tr>`;
  }
}


async function getStudent() {
  try {
    const url = "https://annuaire-emisa.redbox.fr/api/students";

    const response =  await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status} `);
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error(error.message);
  }
}