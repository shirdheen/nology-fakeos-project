import { getCoordinates } from "./geocoder.js";
import { getWeather } from "./weatherApp.js";

export const handleWeatherRequest = async () => {
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const country = document.getElementById("country").value.trim();
  const weatherDataElement = document.getElementById("weatherData");

  console.log("User input values:", { city, state, country });

  try {
    weatherDataElement.style.display = "block";
    weatherDataElement.textContent = "Loading...";

    const { lat, lon } = await getCoordinates(city, state, country);
    console.log("Coordinates received:", { lat, lon });
    const { temperature, description } = await getWeather(lat, lon);
    console.log("Weather data received:", weatherData);
    if (weatherData) {
      weatherDataElement.textContent = `Weather: ${temperature}°C, ${description}`;
    } else {
      weatherElement.style.display = "none";
    }
  } catch (error) {
    console.error("Error in handleWeatherRequest:", error.message);
    weatherDataElement.textContent = `Error: ${error.message}`;
  }
};
