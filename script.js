import { handleWeatherRequest } from "./modules/weatherUI-handler.js";
import { updateTime } from "./modules/updateTime.js";

updateTime();

document.getElementById("weatherForm").addEventListener("submit", (e) => {
  e.preventDefault();
  handleWeatherRequest();
  weatherForm.reset();
});

document.querySelector(".icon-container").addEventListener("click", () => {
  document.getElementById("weatherModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("weatherModal").style.display = "none";

  weatherForm.reset();
  weatherData.style.display = "none";
});

const menuButton = document.querySelector(".menu");
const menuModal = document.getElementById("menu-modal");
const closeMenuModal = document.getElementById("closeMenuModal");

menuButton.addEventListener("click", () => {
  menuModal.style.display = "block";
});

closeMenuModal.addEventListener("click", () => {
  menuModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === menuModal) {
    menuModal.style.display = "none";
  }
});
