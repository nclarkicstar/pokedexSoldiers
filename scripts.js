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
  <h3 class="type">Strategy: Calm and resilient</h3>
  <h4>You have been falsely accused of taking someone's work</h4>
  <h4>Step 1: Assessment</h4>
  <p>This is a tough situation, and you need to keep a clear mind to handle it. <strong>Friendlebub</strong> uses its <em>Empathy</em> ability to make sure everyone keeps a clear mind.</p>
  <h4>Step 2: Approach</h4>
  <p>Once you have used your clear mind to think of an approach to this situation, <strong>Leaderaptor</strong> uses its <em>strategic planning and leadership</em> to take initiative and kicks off this defensive war strategy</p>
  <h4>Step 3: Stay Positive</h4>
  <p>This approach needs to be respectful even if it is an attack on yourself. <strong>Optimibright</strong> shines bright in this part of the scenario. They use <em>optimism</em> to shine bright even in this dark time.</p>
  <h4>Step 5: Resolve</h4>
  <p>You know you are being falsely accused and you have to do something to convice everyone you are correct. <strong>Determinedragon</strong> steps in with great <em>resilience</em> and <em>fortitude</em> to keep fighting under this pressure.</p>
  <p>Eventually, this war comes to an end. Your buffalo soldiers have helped you through this scenario thanks to you knowing how to properly use them</p>
  <h4>Step 6: Restore lost bonds</h4>
  <p>Now that all the conflict is gone, it's time to heal. <strong>Teamander</strong> joins the scene and uses its <em>team spirit</em> powers to bring the team closer together and learn from this conflict.</p>
`;
  showOverlay();
}

function openPeacePlanOverlay() {
  const overlay = document.getElementById("pokemonOverlay");
  document.getElementById("overlayName").textContent = "Peace Plan";
  document.getElementById("overlayImage").src = "images/team.png";
  document.getElementById("overlayText").innerHTML = `
  <h3 class="type">Strategy: </h3>
  <h4>You have been falsely accused of taking someone's work</h4>
  <h4>Step 1: Assessment</h4>
  <p><strong>NameHere</strong> <em>AbilityHere</em> </p>

  <h4>Step 2: Approach</h4>
  <h4>Step #3: Stay Positive</h4>
  <h4>Step 5: Resolve</h4>
  <h4>Step 6: Restore lost bonds</h4>
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
