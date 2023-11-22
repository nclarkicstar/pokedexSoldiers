document.querySelectorAll(".gridImage").forEach((item) => {
  item.addEventListener("click", (event) => {
    const pokemonName = item.querySelector(".pokemonName").textContent;
    const pokemonImage = item.querySelector("img").src;
    const overlay = document.getElementById("pokemonOverlay");
    const overlayContent = document.getElementById("overlayContent");

    document.getElementById("overlayName").textContent = pokemonName;
    document.getElementById("overlayImage").src = pokemonImage;

    // Reset any existing animations
    overlay.classList.remove("overlay-fade-out");
    overlayContent.classList.remove("overlay-slide-out");

    // Apply styles to make the overlay visible and start animations
    overlay.style.display = "flex";
    overlay.style.opacity = "1";
    overlayContent.style.transform = "translateY(0)";
  });
});

document.getElementById("closeOverlay").addEventListener("click", () => {
  const overlay = document.getElementById("pokemonOverlay");
  const overlayContent = document.getElementById("overlayContent");

  // Start the fade out and slide down animations
  overlay.classList.add("overlay-fade-out");
  overlayContent.classList.add("overlay-slide-out");

  // Set a timeout to match the animation duration
  setTimeout(() => {
    overlay.style.display = "none";
    // Reset styles after animation
    overlay.style.opacity = "0";
    overlayContent.style.transform = "translateY(100%)";
  }, 500); // This duration should match the longest animation time
});
