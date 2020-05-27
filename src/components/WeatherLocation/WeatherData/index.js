import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WheatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
// import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constants/weathers';
import './styles.css';

const WheatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
    );

WheatherData.propTypes = {
    data: PropTypes.shape({ //nombre data que contenga
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}
export default WheatherData;
