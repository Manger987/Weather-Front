import React from 'react';
import { PropTypes } from 'prop-types';
import ForecastItem from './ForecastItem/index';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(weatherDay => 
    <ForecastItem 
        key={`${weatherDay.weekDay}${weatherDay.hour}`} 
        weekday={weatherDay.weekDay} 
        hour={weatherDay.hour} 
        data={weatherDay.data} 
    />)
}

const renderProgress = () => {
    return <h3>cargando pronostico extendido...</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (

            <div>
                <h2 className='forecast-title'>Pronóstico Extendido {city}</h2>
                { forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
            </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;