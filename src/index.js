import './style.css';
import { fetchData } from './util/weather_api';

let data = await fetchData('Tel Aviv');
const renderData = () => {
    const locationElem = document.querySelector('.location');
    locationElem.innerText = `${data.location.name}, ${data.location.country}`;

    const dateElem = document.querySelector('.date');
    dateElem.innerText = `${data.location.localtime}`;

    const tempElem = document.querySelector('.temperature');
    tempElem.innerText =`${data.current.temp_c}°C`;

    const weather_iconElem = document.querySelector('.weather-icon');
    weather_iconElem.src = data.current.condition.icon

    const feels_likeElem = document.querySelector('.temperature +p');
    feels_likeElem.innerText = `Feels like ${data.current.feelslike_c}°C`;

    const forecastElements = document.querySelectorAll('.forecast tr')
    for(let i = 0; i < forecastElements.length; i++){
        forecastElements[i].children[0].innerText = `${data.forecast.forecastday[i+1].date}`;
        forecastElements[i].children[1].innerText = `${data.forecast.forecastday[i+1].day.maxtemp_c} / ${data.forecast.forecastday[i].day.mintemp_c}`;
    }
}
renderData();

const searchElem = document.querySelector('[type="search"]');
const handleListener = async function(){
    data = await fetchData(this.value);
    console.log(data);
    renderData();
}
searchElem.addEventListener('submit', await handleListener);
searchElem.addEventListener('keydown', async function(e) {
    if(e.key === 'Enter')  await handleListener.call(this);
});