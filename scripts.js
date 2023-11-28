//
//
//
//
//
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gridImage").forEach((item) => {
    item.addEventListener("click", openOverlay);
  });

  const closeOverlayButton = document.getElementById("closeOverlay");
  closeOverlayButton.addEventListener("click", closeOverlay);
  closeOverlayButton.addEventListener("touchend", closeOverlay);
  const warPlanButton = document.getElementById("warPlanButton");
  warPlanButton.addEventListener("click", openWarPlanOverlay);

  const peacePlanButton = document.getElementById("peacePlanButton");
  peacePlanButton.addEventListener("click", openPeacePlanOverlay);

  const eggImage = document.getElementById("eggImage");
  eggImage.addEventListener("click", openEggOverlay);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      closeOverlay();
    }
  });
});

function openOverlay() {
  const pokemonName = this.querySelector(".pokemonName").textContent;
  const pokemonImage = this.querySelector("img").src;
  const overlay = document.getElementById("pokemonOverlay");

  document.getElementById("overlayName").textContent = pokemonName;
  document.getElementById("overlayImage").src = pokemonImage;
  const overlayText = document.getElementById("overlayText");
  if (!overlayText) {
    console.error("Element with ID 'overlayText' not found.");
    return;
  }

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const pokemonData = data[pokemonName];
      if (pokemonData) {
        overlayText.innerHTML = `
                    <h3 class="type">Type: ${pokemonData.type}</h3>
                    <h4>Abilities: ${pokemonData.abilities.join(", ")}</h4>
                    <p>${pokemonData.description}</p>
                    <h4>Strengths:</h4>
                    <ul>${pokemonData.strengths
                      .map((strength) => `<li>${strength}</li>`)
                      .join("")}</ul>
                      <h4>Weaknesses:</h4>
                      <ul>${pokemonData.weaknesses
                        .map((weakness) => `<li>${weakness}</li>`)
                        .join("")}</ul>
                        <div class="skill-bars">
                        <p>Skills</p>
                          ${createSkillBar(
                            pokemonData.skilllevel1Name,
                            pokemonData.skilllevel1Level
                          )}
                          ${createSkillBar(
                            pokemonData.skilllevel2Name,
                            pokemonData.skilllevel2Level
                          )}
                          ${createSkillBar(
                            pokemonData.skilllevel3Name,
                            pokemonData.skilllevel3Level
                          )}
                        </div>
                  `;
      }
    })
    .catch((error) => console.error("Error:", error));

  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.opacity = "1";
    overlayContent.style.transform = "translateY(0)";
  }, 10);
}

function animateAndHide() {
  var element = document.getElementById("overlayImage");
  element.classList.add("animate__hinge");

  setTimeout(function () {
    element.classList.remove("animate__hinge");
    element.classList.add("hide");
  }, 4000);
}

// Call the function to start the process

function openEggOverlay() {
  const pokemonName = "Nathan";
  const overlay = document.getElementById("pokemonOverlay");

  document.getElementById("overlayName").textContent = pokemonName;
  document.getElementById("overlayImage").src = "images/bigTeam.png";
  animateAndHide();

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const pokemonData = data[pokemonName];
      if (pokemonData) {
        document.getElementById("overlayImage").classList.add("animate__hinge");

        overlayText.innerHTML = `
        
                    <h3 class="type">Type: ${pokemonData.type}</h3>
                    <h4>Description:</h4>
                    <h4>${pokemonData.description}</h4>
                    <h4 class="">LinkedIn: ${pokemonData.abilities.join(
                      ""
                    )}</h4>
                    <a target="_blank" href=${pokemonData.linkedin}>${
          pokemonData.linkedin
        }</a>
                    <h4>Github:</h4>
                    <ul>${pokemonData.github
                      .map(
                        (github) =>
                          `<li><a target="_blank" href=${github}>${github}</a></li>`
                      )
                      .join("")}</ul>
                        <h4>Email:</h4>
                        <ul>${pokemonData.email
                          .map(
                            (email) =>
                              `<li><a href=mailto:${email}>${email}</a></li>`
                          )
                          .join("")}</ul>
                            
`;
      }
    })
    .catch((error) => console.error("Error:", error));

  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.opacity = "1";
    overlayContent.style.transform = "translateY(0)";
  }, 10);
}

function createSkillBar(skillName, skillLevel) {
  return `
              <div class="skill">
                <span>${skillName}: </span>
                <div class="skill-bar">
                  <div class="skill-fill" style="width: ${
                    (skillLevel * 100) / 15
                  }%;"></div>
                </div>
              </div>
            `;
}

function closeOverlay() {
  const overlay = document.getElementById("pokemonOverlay");
  const overlayContent = document.getElementById("overlayContent");

  overlay.style.opacity = "0";
  overlayContent.style.transform = "translateY(100%)";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}

var closeOverlayButton = document.getElementById("closeOverlay");
closeOverlayButton.addEventListener("click", closeOverlay);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.keyCode === 27) {
    closeOverlay();
  }
});

const warPlanButton = document.getElementById("warPlanButton");
warPlanButton.addEventListener("click", openWarPlanOverlay);

const peacePlanButton = document.getElementById("peacePlanButton");
peacePlanButton.addEventListener("click", openPeacePlanOverlay);

function openWarPlanOverlay() {
  const overlay = document.getElementById("pokemonOverlay");
  document.getElementById("overlayName").textContent = "War Plan";
  document.getElementById("overlayImage").src = "images/team.png";
  document.getElementById("overlayText").innerHTML = `
    <h3 class="type">Strategy: </h3>
    <h4>Description:</h4>
    <p></p>
  `;
  showOverlay();
}

function openPeacePlanOverlay() {
  const overlay = document.getElementById("pokemonOverlay");
  document.getElementById("overlayName").textContent = "Peace Plan";
  document.getElementById("overlayImage").src = "images/team.png";
  document.getElementById("overlayText").innerHTML = `
    <h3 class="type">Strategy: </h3>
    <h4></h4>
    <p></p>
  `;
  showOverlay();
}

function showOverlay() {
  const overlay = document.getElementById("pokemonOverlay");
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.opacity = "1";
    document.getElementById("overlayContent").style.transform = "translateY(0)";
  }, 10);
}
