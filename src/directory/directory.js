window.onload = async (event) => {
  // CONNEXION API POUR REMPLIR TABLEAU DES ETUDIANTS

  // Récupération objet du fetch
  const data = await getStudent();
  console.log(data);
  //Récupération des données de l'objet
  const studentData = data["member"];
  console.log(studentData);

  studentTable(studentData);
};

const studentTable = (studentData) => {
  for (const student of studentData) {
    // console.log(student);
    const studentList = document.querySelector(".student");
    const birthDay = new Date(student.birthDay);
    const formattedDate = birthDay.toLocaleDateString("fr-FR");
    studentList.innerHTML +=
    `
     <div class="stud-sheet">
    
            <div class="img_container"><img class="stud-pic" src="../../assets/photos/${student.photo}" alt="student picture"></div>

            <div class="stud-card">

                <div class="id">
                    <span id="stud-id">${student.firstName} ${student.lastName}</span>
                    <p>Date de naissance : ${formattedDate}</p>
                    <p class="year-type">Formation : ${student.course.title}</p>
                    <img src="../../assets/images/picto-promo.svg" alt="student hat"> <span class="year-type"> Promo ${student.promo}</span>
                </div>
    
                <img src="../../assets/images/coeur-vide.svg" alt="student selection" class="heart">
     
                <div class="btn-stud">
                    <a href="../student/student.html"><button>Voir la fiche</button></a>
                </div>
            </div>
        </div>      
    `
  }
};

async function getStudent() {
  try {
    const url = "http://127.0.0.1:8000/api/students";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status} `);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
