document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners to each Pokemon grid image
  document.querySelectorAll(".gridImage").forEach((item) => {
    item.addEventListener("click", openOverlay);
  });

  // Add event listener to the close button of the overlay
  const closeOverlayButton = document.getElementById("closeOverlay");
  closeOverlayButton.addEventListener("click", closeOverlay);
  closeOverlayButton.addEventListener("touchend", closeOverlay);

  // Add event listener to the eggJumping image
  const eggJumping = document.getElementById("eggJumping");
  eggJumping.addEventListener("click", () => openOverlay("addachu"));
});

function openOverlay(pokemonName = null) {
  // Use provided pokemonName, or find it from the clicked element
  if (!pokemonName) {
    pokemonName = this.querySelector(".pokemonName").textContent;
  }

  const pokemonImage = document.getElementById("eggJumping").src;
  const overlay = document.getElementById("pokemonOverlay");

  document.getElementById("overlayName").textContent = pokemonName;
  document.getElementById("overlayImage").src = pokemonImage;
  const overlayText = document.getElementById("overlayText");
  if (!overlayText) {
    console.error("Element with ID 'overlayText' not found.");
    return;
  }

  // Fetch and display data for the selected Pokemon
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

  // Display the overlay
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

  // Hide the overlay
  overlay.style.opacity = "0";
  overlayContent.style.transform = "translateY(100%)";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}
