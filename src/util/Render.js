import { fetchData } from "./weather_api";
import dateFormat, { masks } from "dateformat";

let data = await fetchData('Tel Aviv');
const renderData = async (input) => {
    input = input.toString();
    if(input) data = await fetchData(input);
    const locationElem = document.querySelector('.location');
    locationElem.innerText = `${data.location.name}, ${data.location.country}`;

    const dateElem = document.querySelector('.date');
    dateElem.innerText = dateFormat(data.location.localtime, "dddd, mmmm dS yyyy");

    const tempElem = document.querySelector('.temperature');
    tempElem.innerText =`${data.current.temp_c}°C`;

    const weather_iconElem = document.querySelector('.weather-icon');
    weather_iconElem.src = data.current.condition.icon

    const feels_likeElem = document.querySelector('.temperature +p');
    feels_likeElem.innerText = `Feels like ${data.current.feelslike_c}°C`;

    const forecastElements = document.querySelectorAll('.forecast tr')
    for(let i = 0; i < forecastElements.length; i++){
        forecastElements[i].children[0].innerText = `${dateFormat(data.forecast.forecastday[i+1].date, 'dddd')}`;
        forecastElements[i].children[1].innerText = `${data.forecast.forecastday[i+1].day.maxtemp_c}° / ${data.forecast.forecastday[i].day.mintemp_c}°`;
    }
}


export { renderData };