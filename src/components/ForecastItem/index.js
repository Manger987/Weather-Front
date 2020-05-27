import React from 'react';
import { PropTypes } from 'prop-types';
import WheatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({ weekday, hour, data }) => (
    <div>
        <h2>{weekday} {hour} hs.</h2>
        <div><WheatherData data={data}/></div>
    </div>
)

ForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({ //nombre data que contenga
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default ForecastItem;
