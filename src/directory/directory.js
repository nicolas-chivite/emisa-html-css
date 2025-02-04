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
  for (const student of studentData) {
    console.log(student);
    const studentList = document.querySelector(".student");
    const birthDay = new Date(student.birthDay);
    const formattedDate = birthDay.toLocaleDateString("fr-FR");
    studentList.innerHTML +=
    `
     <div class="stud-sheet">
    
            <img class="stud-pic" src="../../assets/images/avatar-femme.svg" alt="student picture">

            <div class="stud-card">

                <div class="id">
                    <span id="stud-id">${student.firstName} ${student.lastName}</span>
                    <p>Date de naissance : ${formattedDate}</p>
                    <p class="year-type">Formation : ${student.course.title}</p>
                    <img src="../../assets/images/picto-promo.svg" alt="student hat"> <span class="year-type"> Promo ${student.promo}</span>
                </div>
    
                <img src="../../assets/images/coeur-vide.svg" alt="student selection" class="heart">
     
                <div class="btn-stud">
                    <button>Voir la fiche<a href="../student.html"></a></button>
                </div>
            </div>
        </div>      
    `
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
