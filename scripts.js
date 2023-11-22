document.querySelectorAll(".gridImage").forEach((item) => {
  item.addEventListener("click", (event) => {
    const pokemonName = item.querySelector(".pokemonName").textContent;
    const pokemonImage = item.querySelector("img").src;
    const overlay = document.getElementById("pokemonOverlay");
    const overlayContent = document.getElementById("overlayContent");

    // Set the content for the overlay
    document.getElementById("overlayName").textContent = pokemonName;
    document.getElementById("overlayImage").src = pokemonImage;

    // Remove the classes that hide the overlay
    overlay.classList.remove("overlay-fade-out");
    overlayContent.classList.remove("overlay-slide-out");

    // Reset the display and opacity to show the overlay
    overlay.style.display = "flex";
    setTimeout(() => {
      // Timeout to apply the display property
      overlay.style.opacity = "1";
      overlayContent.style.transform = "translateY(0)";
    }, 10); // Short timeout before the CSS transitions
  });
});

document.getElementById("closeOverlay").addEventListener("click", () => {
  const overlay = document.getElementById("pokemonOverlay");
  const overlayContent = document.getElementById("overlayContent");

  // Start the fade out and slide down animations
  overlay.style.opacity = "0";
  overlayContent.style.transform = "translateY(100%)";

  // Use the 'transitionend' event to listen for when the animation ends
  overlay.addEventListener(
    "transitionend",
    () => {
      overlay.style.display = "none";
    },
    { once: true }
  ); // Use the { once: true } option so the event is only handled once
});
