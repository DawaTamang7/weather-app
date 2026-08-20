// https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}

import axios from "axios";

const API_URL ="https://api.openweathermap.org/data/2.5/weather";

const API_ID = "2d70500e421afb11826136f137e7062a"

export async function getWeatherData(cityName){
    const response = await axios.get(`${API_URL}?q=${cityName}&appid=${API_ID}`);
    return response.data;
}





