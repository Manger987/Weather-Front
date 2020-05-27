import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es';
import {getDataFormat} from './weather';
// const api_key = process.env.API_KEY_WEATHER;
const api_key = "c2d47967a7bd9ad741ea26d876b29fce";
 
const getWeatherForecast = async (location) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api_key}`)
    .then(res => transformForecast(res.data));
}

const transformForecast = async data => {
    let final = [];
    await data.list.filter(item => (//filter entrega un arreglo con los datos filtrados
        moment.unix(item.dt).utc().hour() === 6 || 
        moment.unix(item.dt).utc().hour() === 12 || 
        moment.unix(item.dt).utc().hour() === 18 
        )
    ).map(item => {
        return getDataFormat(item).then((resp) => {
            final.push(
            { //con el arreglo ya fltrado se ordenan los datos mapeandolos.
                weekDay: moment.unix(item.dt).format('ddd'),
                hour: moment.unix(item.dt).hour(),
                data:resp
            });
        })
    })
    return await final;
}

export { getWeatherForecast };