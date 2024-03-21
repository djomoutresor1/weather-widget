// Define cities
const cities = ["Milan", "London", "Bangkok", "Los Angeles", "Tokyo"];
let currentCityIndex = 0;

// Define images
let images = ['milan_duomo.jpg', 'london_bridge.jpg', 'bangkok.jpg', 'los_angeles.jpg', 'tokyo.jpg'];
let currentImageIndex = 0;

// Function to get data of Meteo
async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c921c2e3d78711622064c79556689aa3`
  );
  const weatherData = await response.json();
  return weatherData;
}

async function updateWeatherWidget() {
  const city = cities[currentCityIndex];
  const weatherData = await getWeather(city);

  // update  widget meteo with new data
  document.getElementById("cityName").textContent = weatherData.name;
  document.getElementById("temperature").textContent = `${weatherData.main.temp} °C`;
  document.getElementById("temperatureMax").textContent = `${weatherData.main.temp_min} °C`;
  document.getElementById("temperatureMin").textContent = `${weatherData.main.temp_max} °C`;
  document.getElementById("description").textContent = `${weatherData.weather[0].description} °C`;
  document.getElementById("weatherIcon").src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  // update background image
  document.body.style.backgroundImage = `url('../src/assets/img/${images[currentImageIndex]}')`;
}

// Function to get next city
window.nextCity = function () {
    currentCityIndex = (currentCityIndex + 1) % cities.length;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateWeatherWidget();
};

// Function to get previous city
window.previousCity = function () {
    currentCityIndex = (currentCityIndex - 1 + cities.length) % cities.length;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateWeatherWidget();
};

updateWeatherWidget();
