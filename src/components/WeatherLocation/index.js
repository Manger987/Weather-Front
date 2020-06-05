import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Location from './Location';
import PropTypes from 'prop-types';
import WheatherData from './WeatherData';
import './styles.css'

const WheatherLocation = ({ onWeatherLocationClick, city, data }) => (

    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WheatherData data={data} /> : <CircularProgress size={60} thickness={7} />}
    </div>
);  

WheatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
    data: PropTypes.shape({ //nombre data que contenga
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WheatherLocation;
