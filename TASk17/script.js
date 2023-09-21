// API key for OpenWeatherMap
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

// Function to fetch country data
async function fetchCountryData() {
  try {
    const response = await fetch('https://restcountries.com/v3/all');
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}

// Function to fetch weather data
async function fetchWeatherData(latitude, longitude) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to create Bootstrap card for country data
function createCountryCard(country) {
  const card = document.createElement('div');
  card.classList.add('col-md-4', 'mb-4');

  const html = `
    <div class="card">
      <img src="${country.flags.png}" class="card-img-top" alt="Flag">
      <div class="card-body">
        <h5 class="card-title">${country.name.common}</h5>
        <p class="card-text">Capital: ${country.capital}</p>
        <p class="card-text">Region: ${country.region}</p>
        <p class="card-text">Country Codes: ${Object.keys(country.cca2).join(', ')}</p>
        <p class="card-text">Latlng: ${country.latlng.join(', ')}</p>
        <div class="weather-info">
          <p class="card-text">Weather: Loading...</p>
        </div>
      </div>
    </div>
  `;

  card.innerHTML = html;

  return card;
}

// Function to add weather data to country card
async function addWeatherInfoToCard(card, latitude, longitude) {
  const weatherData = await fetchWeatherData(latitude, longitude);

  if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
    const weatherInfo = weatherData.weather[0].description;
    const weatherInfoElement = card.querySelector('.weather-info');
    weatherInfoElement.innerHTML = `<p class="card-text">Weather: ${weatherInfo}</p>`;
  }
}

// Function to render country cards
async function renderCountryCards() {
  const countryCardsContainer = document.getElementById('countryCards');
  const countries = await fetchCountryData();

  if (!countries || countries.length === 0) {
    console.error('No country data available.');
    return;
  }

  for (const country of countries) {
    const card = createCountryCard(country);
    countryCardsContainer.appendChild(card);

    if (country.latlng && country.latlng.length === 2) {
      addWeatherInfoToCard(card, country.latlng[0], country.latlng[1]);
    }
  }
}

// Call the renderCountryCards function when the page is loaded
window.addEventListener('load', renderCountryCards);
