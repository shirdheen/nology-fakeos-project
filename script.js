import { handleWeatherRequest } from "./modules/weatherUI-handler.js";
import { updateTime } from "./modules/updateTime.js";
import { openModal } from "./modules/modal-handler.js";
import { closeModal } from "./modules/modal-handler.js";

const menuButton = document.querySelector(".menu");
const menuModal = document.getElementById("menu-modal");
const closeMenuModal = document.getElementById("closeMenuModal");

updateTime();

document.getElementById("weatherForm").addEventListener("submit", (e) => {
  e.preventDefault();
  handleWeatherRequest();
  weatherForm.reset();
});

document.querySelector(".icon-container").addEventListener("click", () => {
  openModal(document.getElementById("weatherModal"));
});

document.getElementById("closeModal").addEventListener("click", () => {
  closeModal(document.getElementById("weatherModal"));
  weatherForm.reset();
  weatherData.style.display = "none";
});

menuButton.addEventListener("click", () => {
  openModal(menuModal);
});

closeMenuModal.addEventListener("click", () => {
  closeModal(menuModal);
});

window.addEventListener("click", (event) => {
  if (event.target === menuModal) {
    closeModal(menuModal);
  }
});
