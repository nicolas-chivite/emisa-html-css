window.onload = async (event) => {
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
    tableau.innerHTML += `<tr>
        <th>${student.id}</th>
        <th>${student.firstName}</th>
        <th>${student.lastName}</th>
        <th>${student.promo}</th>
        <th>${student.course.title}</th>
      </tr>`;
  }
};

async function getStudent() {
  try {
    const url = "https://annuaire-emisa.redbox.fr/api/students";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status} `);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
