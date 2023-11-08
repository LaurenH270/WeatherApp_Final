//Show Current time
let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let currentDateTime = `${day} ${hours}:${minutes}`;

document.getElementById("current-time").innerHTML = currentDateTime;

//Fahrenheit & Celsius
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

// Update Heading with Search Input // Search Engine
function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function updateCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let city = input.value;
  let apiKey = "ad7630bbeo412222dc49f3a02t1cfb40";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  let h1 = document.querySelector("h1");

  axios.get(apiUrl).then(displayTemperature);
  h1.innerHTML = `${input.value}`;
}

let searchCity = document.querySelector("#search-bar");
searchCity.addEventListener("submit", updateCity);
