import { handleWeatherRequest } from "./modules/weatherUI-handler.js";
import { updateTime } from "./modules/updateTime.js";

updateTime();

document.getElementById("weatherForm").addEventListener("submit", (e) => {
  e.preventDefault();
  handleWeatherRequest();
});

document.querySelector(".icon-container").addEventListener("click", () => {
  document.getElementById("weatherModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("weatherModal").style.display = "none";

  weatherForm.reset();
  weatherData.style.display = "none";
});
