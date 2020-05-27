import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import Location from './Location';
import PropTypes from 'prop-types';
import WheatherData from './WeatherData';
import './styles.css'
import { getWeather } from './../../services/weather';

class WheatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        }
    }

    componentDidMount() {
        this.handleUpdaeClick();
    }

    handleUpdaeClick = async () => {
        const { city } = this.state;
        const data = await getWeather(city);
        this.setState({
            city: data.name,
            data: data
        });
    }

    render() {
        const { city, data } = this.state;
        const { onWeatherLocationClick } = this.props;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {this.state.data ? <WheatherData data={data} /> : <CircularProgress size={50} />}
            </div>
        )
    }
}

WheatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WheatherLocation;
