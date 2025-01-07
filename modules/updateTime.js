export const updateTime = () => {
  const timeElement = document.getElementById("current-time");
  const update = () => {
    const now = new Date();
    console.log(now);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.toLocaleString("default", { month: "short" });
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    const timeString = `${day} ${date} ${month} ${
      hours % 12 || 12
    }:${minutes} ${ampm}`;
    timeElement.textContent = timeString;
  };

  update();
  setInterval(update, 1000);
};
