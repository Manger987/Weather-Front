import {getWeatherForecast} from './../services/weatherForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {
    return async dispatch => {

        //activar en el estado un indicador de busqueda del estado.

        dispatch(setCity(payload)) //se establece la ciudad actual disparando la accion setCity (line 6)

        const forecastData = await getWeatherForecast(payload) //payload = city
        //Modificar el estado con el resultado de la promise.
        dispatch(setForecastData({city: payload, forecastData}));
    }
};