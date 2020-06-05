import thunk from 'redux-thunk';
import { getWeatherForecast } from './../services/weatherForecast';
import { getWeather } from './../services/weather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

//actions creators
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload }); //esto se toma en los reducers
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {

    return async (dispatch, getState) => { //parametros en redux-thunk (dispatch, getState)
        //activar en el estado un indicador de busqueda del estado.
        dispatch(setCity(payload)) //se establece la ciudad actual disparando la accion setCity (line 6)
        
        // const state = getState();
        // const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        // const now = new Date();

        // console.log('DATE::', state.cities[payload]);
        // if (date && (now - date) < 1 * 60 * 1000 ){
        //     console.log('MENOS DE 1 MINUTO')
        //     return;
        // }
        const forecastData = await getWeatherForecast(payload) //payload = city
        //Modificar el estado con el resultado de la promise.
        dispatch(setForecastData({ city: payload, forecastData }));
    }
};

export const setWeather = payload => {
    return dispatch => { //dispatch se genera gracias al middleware de thunk y permite trabajar asincronicamente.
        payload.forEach(async city => {
            dispatch(getWeatherCity(city));
            const weather = await getWeather(city);
            console.log('weather city:', weather);
            dispatch(setWeatherCity({city, weather}));
        });
        
    }
};