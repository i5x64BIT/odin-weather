import './style.css';
import { fetchData } from './util/weather_api';
import { renderData } from './util/Render';

renderData();

const searchElem = document.querySelector('[type="search"]');
const handleListener = async function(){
    data = await fetchData(this.value);
    renderData();
}
searchElem.addEventListener('submit', await handleListener);
searchElem.addEventListener('keydown', async function(e) {
    if(e.key === 'Enter')  await handleListener.call(this);
});