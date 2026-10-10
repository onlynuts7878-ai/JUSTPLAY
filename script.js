// GameVault website interactions.
// Add the publicly hosted game URL here once a compatible game host is ready.
const HOSTED_GAME_URL = "";

document.getElementById("year").textContent = new Date().getFullYear();

const playButton = document.getElementById("play-button");
const playNotice = document.getElementById("play-notice");

playButton.addEventListener("click", () => {
  if (HOSTED_GAME_URL) {
    window.location.href = HOSTED_GAME_URL;
    return;
  }
  playNotice.classList.add("show");
  playNotice.textContent =
    "The website is ready, but online game hosting is not configured yet. Launch-Local only works on your own PC.";
});
