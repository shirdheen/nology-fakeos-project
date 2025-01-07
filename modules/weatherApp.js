export const getWeather = async (lat, lon) => {
  const apiKey = "e226efa918815437db62bfc06a2a9c68";
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    console.log("Weather API data:", data);
    const temp = data.current.temp;
    console.log(temp);
    const weatherDescription = data.current.weather[0].description;
    console.log(weatherDescription);
    const weatherData = {
      temperature: temp,
      description: weatherDescription,
    };
    console.log("Weather data:", weatherData);
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather:", error.message);
    throw error;
  }
};
