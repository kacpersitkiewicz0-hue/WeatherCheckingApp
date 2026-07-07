const apiKey = "5220bbe3a1e28b41d3cf03284f6d60e6";

const form = document.querySelector("form");
const cityInput = document.querySelector("input");
const weatherIcon = document.getElementById("weatherIcon");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temp");
const description = document.getElementById("desc");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const city = cityInput.value.trim();

  if (city === "") return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data from servers:", data);

      cityName.textContent = data.name;
      temperature.textContent = Math.round(data.main.temp) + "°C";
      description.textContent = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    })
    .catch((error) => {
      console.log("Błąd połączenia z serwerem:", error);
    });
});
