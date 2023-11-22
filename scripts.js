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

  const eggImage = document.getElementById("eggImage");
  eggImage.addEventListener("click", openEggOverlay);

  // Add a keydown event listener to the document
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

function openEggOverlay() {
  const pokemonName = "Nathan";
  const overlay = document.getElementById("pokemonOverlay");

  document.getElementById("overlayName").textContent = pokemonName;
  document.getElementById("overlayImage").src = "images/trainer.png";

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const pokemonData = data[pokemonName];
      if (pokemonData) {
        overlayText.innerHTML = `
                    <h3 class="type">Type: ${pokemonData.type}</h3>
                    <h4>LinkedIn: ${pokemonData.abilities.join(", ")}</h4>
                    <a target="_blank" href=${pokemonData.description}>${
          pokemonData.description
        }</a>
                    <h4>Github:</h4>
                    <ul>${pokemonData.strengths
                      .map(
                        (strength) =>
                          `<li><a target="_blank" href=${strength}>${strength}</a></li>`
                      )
                      .join("")}</ul>
                      <h4>Email:</h4>
                      <ul>${pokemonData.weaknesses
                        .map(
                          (weakness) =>
                            `<li><a href=mailto:${weakness}>${weakness}</a></li>`
                        )
                        .join("")}</ul>
                        
                        <!--  
                        <div class="skill-bars">
                        <p>Skills</p>
                        // move skillbar here if wanted
                        // move skillbar here if wanted
                        // move skillbar here if wanted
                        // move skillbar here if wanted
                        </div>
                        -->
                  `;
        //         <!-- skillbar to move up if wanted -->
        //         <!-- skillbar to move up if wanted -->
        //         <!-- skillbar to move up if wanted -->
        //   ${createSkillBar(
        //     pokemonData.skilllevel1Name,
        //     pokemonData.skilllevel1Level
        //   )}
        //     ${createSkillBar(
        //       pokemonData.skilllevel2Name,
        //       pokemonData.skilllevel2Level
        //     )}
        //     ${createSkillBar(
        //       pokemonData.skilllevel3Name,
        //       pokemonData.skilllevel3Level
        //     )}
        //         <!-- skillbar to move up if wanted -->
        //         <!-- skillbar to move up if wanted -->
        //         <!-- skillbar to move up if wanted -->
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

// Add a click event listener to the closeOverlay button
var closeOverlayButton = document.getElementById("closeOverlay");
closeOverlayButton.addEventListener("click", closeOverlay);

// Add a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.keyCode === 27) {
    closeOverlay();
  }
});
