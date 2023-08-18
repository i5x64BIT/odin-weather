import './style.css';
import { fetchData } from './util/weather_api';
import { renderData } from './util/Render';

renderData();

const searchElem = document.querySelector('[type="search"]');
const handleListener = async function(){
    await renderData(this.value);
}
searchElem.addEventListener('submit', await handleListener);
searchElem.addEventListener('keydown', async function(e) {
    if(e.key === 'Enter')  await handleListener.call(this);
});