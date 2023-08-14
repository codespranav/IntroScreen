let welcomeScreen = document.getElementById("welcomeScreen");
let dashboard = document.querySelector(".container");

setTimeout(() => {
  welcomeScreen.style.opacity = "0"; // Start fading out the welcome screen
  dashboard.style.opacity = "1"; // Start fading in the dashboard
  setTimeout(() => {
    welcomeScreen.style.display = "none"; // Hide the welcome screen after fading out
  }, 500); // Adjust timing to match the transition duration
}, 2000);