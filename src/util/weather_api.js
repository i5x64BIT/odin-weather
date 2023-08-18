let dataCache;
let currentLocation;
async function fetchData(location) {
    try{
        location = location.toString();
        if(!dataCache || location !== currentLocation){
            const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4f4fc43807904d4f8e3140150231708&q="${ location }"&days=8&aqi=no&alerts=no`);
            dataCache = await res.json();
            currentLocation = location;
        }
        return dataCache;
    } catch (e){
        console.log(e);
    }
}

export { fetchData };