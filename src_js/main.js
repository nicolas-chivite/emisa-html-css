window.onload = (event) => {
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

  const submit = document.getElementById("submit");

  const addStudent = () => {
    const name = document.getElementById("studentName");
    const age = document.getElementById("studentAge");
    let tbody = document.getElementById("studentTable");

    tbody.innerHTML += 
    `<tr>
      <th>${name.value}</th>
      <th>${age.value}</th>
    </tr>`;

  };
  submit.addEventListener("click", addStudent);
};