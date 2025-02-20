import './style.css'

const INPUT_ELEM = document.querySelector('#location-input')
const STATS_DISPLAY_ELEM_MAIN = document.querySelector('.weather-stats')
const ADDRESS_NAME_ELEM = document.querySelector('.weather-name')
const MAIN_CONTAINER_ELEM = document.querySelector('.container')
console.log(INPUT_ELEM);
const apiKey = 'HV3EBVHU3XN6F3KS7XMFJ7SDG';


async function getData(input){
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=${apiKey}&unitGroup=metric`;
    try{
    const response = (await fetch(url));
    if(!response.ok){
        throw new Error(`Error: ${response.status}`)
    }
    const data = await response.json();
    return data
    }catch(err){
        console.log(err);
        return null;
    }

}

async function displayData(input){
    const data = await getData(input)
    const {icon, temp, datetime, feelslike, humidity, windspeed, windgust, conditions} = data.currentConditions;
    const {resolvedAddress, description} = data;
    showContainer();
    STATS_DISPLAY_ELEM_MAIN.innerHTML = ``;
    ADDRESS_NAME_ELEM.innerHTML = ``;
    ADDRESS_NAME_ELEM.innerHTML = resolvedAddress
    STATS_DISPLAY_ELEM_MAIN.innerHTML = `
                    <div class="stats-temperature">
                        <img src="${weatherIcons[icon]}" alt="weather-icon" class="temperature-icon">
                        <p class="temperature-numeric">${temp} &deg;C</p> 
                    </div>
                    <div class="stats-details">
                        <div class="currentTime">Current Time: ${datetime}</div>
                        <div class="stat-realFeel">Feels like: ${feelslike} &deg;C</div>
                        <div class="stat-humidity">Humidity: ${humidity}</div>
                        <div class="stat-wind-speed">Wind speed: ${windspeed} km/h</div>
                        <div class="stat-wind-gust">Wind gust: ${windgust} km/h</div>
                    </div>
                      <div class="stats-description">
                        <div class="stat-conditions">${conditions}</div>
                        <div class="stat-forecast">${description}</div>
                    </div>
                    `

}

function showContainer() {
    MAIN_CONTAINER_ELEM.style.display = 'block'; // Make it visible
    setTimeout(() => {
        MAIN_CONTAINER_ELEM.classList.add('show'); // Start animation
    }, 10); // Small delay to ensure CSS applies
}


INPUT_ELEM.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        const input = INPUT_ELEM.value.toLowerCase();
        displayData(input)
    }
})


const weatherIcons = {};
const iconKeys = [
    "clear-day", 
    "clear-night", 
    "partly-cloudy-day", 
    "partly-cloudy-night", 
    "cloudy", 
    "rain", 
    "snow", 
    "sleet", 
    "wind", 
    "fog", 
    "showers-day", 
    "showers-night", 
    "thunder-rain", 
    "thunder-showers-day", 
    "thunder-showers-night"
  ];

const loadIcons = (async () => {
    const iconPromises = iconKeys.map((key) => {
        return import(`./svgs/${key}.svg`)
        .then((module) => {
            weatherIcons[key] = module.default;  // Store the imported icon (SVG)
        })
        .catch(err => {
            console.error(`Error loading icon for ${key}:`, err);
            weatherIcons[key] = null;  // Optionally handle the absence of the icon
        });
    })

    await Promise.all(iconPromises)
})()




