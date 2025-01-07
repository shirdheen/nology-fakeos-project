export const getCoordinates = async (city, state, country) => {
  const apiKey = "e226efa918815437db62bfc06a2a9c68";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch coordinates");
    }
    const data = await response.json();
    if (data.length === 0) {
      throw new Error("Location not found");
    }
    const { lat, lon } = data[0];
    console.log("Extracted coordinates:", { lat, lon });
    return { lat, lon };
  } catch (error) {
    console.error("Error fetching coordinates", error.message);
    throw error;
  }
};
