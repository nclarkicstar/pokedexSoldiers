document.addEventListener("DOMContentLoaded", () => {
  // Event listener for each grid image
  document.querySelectorAll(".gridImage").forEach((item) => {
    item.addEventListener("click", () => {
      const pokemonName = item.querySelector(".pokemonName").textContent;
      const pokemonImage = item.querySelector("img").src;
      const overlay = document.getElementById("pokemonOverlay");
      const overlayContent = document.getElementById("overlayContent");

      // Set the content for the overlay
      document.getElementById("overlayName").textContent = pokemonName;
      document.getElementById("overlayImage").src = pokemonImage;

      // Show the overlay and content
      overlay.style.display = "flex";
      setTimeout(() => {
        overlay.style.opacity = "1";
        overlayContent.style.transform = "translateY(0)";
      }, 10);
    });
  });

  // Event listener for the close button
  document.getElementById("closeOverlay").addEventListener("click", () => {
    const overlay = document.getElementById("pokemonOverlay");
    const overlayContent = document.getElementById("overlayContent");

    // Start the fade-out and slide-down animations
    overlay.style.opacity = "0";
    overlayContent.style.transform = "translateY(100%)";

    // Wait for the fade-out animation to complete before hiding the overlay
    overlay.addEventListener(
      "transitionend",
      (event) => {
        if (event.propertyName === "opacity") {
          overlay.style.display = "none";
        }
      },
      { once: true }
    );
  });
});
