const apikey = 'YOUR_OPENWEATHERMAP_API_KEY';

async function fetchCountryData(){
    try{
        const response = await fetch('https://restcountries.com/v3/all');
        const countries = await response .json();
        return countries;
    } catch (error){
        console.error('Error country data :',error);
    }
}

async function fetchWeatherData(latitude, longitude){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`);
        const weatherData = await response.json();
        return weatherData;
    } catch (error){
        console.error('Error weather data:',error);
    }
}
function createCountryCard(country){
    const card = document. createElement('div');
    card.classList.add('col-md-4','mb-4');

    const html =`
    <div class= "card"></div>`
}