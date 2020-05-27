import axios from 'axios';
import convert from 'convert-units';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from './../constants/weathers';

const api_key = "c2d47967a7bd9ad741ea26d876b29fce";

const getWeather = async (location) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`)
    .then(res => getDataFormat(res.data));
}

const getTemp =async kelvin => {
    return await Number(convert(kelvin).from("K").to("C").toFixed(0));
}

const getWeatherState = weather => {
    const { id } = weather;
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }
}

const getDataFormat = async weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;

    return {
        temperature: await getTemp(temp),
        weatherState: await getWeatherState(weather_data.weather[0]),
        humidity,
        wind: `${speed} m/s`,
        name: weather_data.name
    }
}


export { getWeather, getDataFormat }

