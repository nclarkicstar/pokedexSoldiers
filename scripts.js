document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gridImage").forEach((item) => {
    item.addEventListener("click", openOverlay);
  });

  const closeOverlayButton = document.getElementById("closeOverlay");
  closeOverlayButton.addEventListener("click", closeOverlay);
  closeOverlayButton.addEventListener("touchend", closeOverlay); // Fallback for touch devices
});

function openOverlay() {
  const pokemonName = this.querySelector(".pokemonName").textContent;
  const pokemonImage = this.querySelector("img").src;
  const overlay = document.getElementById("pokemonOverlay");
  const overlayContent = document.getElementById("overlayContent");

  document.getElementById("overlayName").textContent = pokemonName;
  document.getElementById("overlayImage").src = pokemonImage;

  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.opacity = "1";
    overlayContent.style.transform = "translateY(0)";
  }, 10);
}

function closeOverlay() {
  const overlay = document.getElementById("pokemonOverlay");
  const overlayContent = document.getElementById("overlayContent");

  overlay.style.opacity = "0";
  overlayContent.style.transform = "translateY(100%)";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 500); // Match this with your longest transition duration
}
