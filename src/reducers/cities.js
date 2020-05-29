import { createSelector } from 'reselect';
import { SET_FORECAST_DATA } from './../actions'; //Accion que estamos atendiendo.

export const cities = (state = {}, action) => {//nmbre del reducer
    switch (action.type) {
        case SET_FORECAST_DATA : 
            const { city, forecastData } = action.payload;
            return {...state, [city]: {forecastData: forecastData, weather: null}}
        default: 
            return state;
    }   
}

// export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData;
export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);