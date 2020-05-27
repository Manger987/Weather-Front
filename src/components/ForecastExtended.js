import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ForecastItem from './ForecastItem/index';
import {getWeatherForecast} from './../services/weatherForecast';
import './styles.css';

class ForecastExtended extends Component {

    constructor(props){
        super(props);
        this.state = {
            forecastData : null
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){ // Se ejecuta cada vez que hay alguna actualizacion de las propiedades.
        if (nextProps.city !== this.props.city) { // nextProps es diferente a la city que esta establecida actualmente? (esto funciona antes de realizar la actualizacion de prop)
            this.setState({forecastData : null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = async city => {
        this.setState({
            forecastData: await getWeatherForecast(city)// forecastData: forecastItems.cod === "200" && forecastItems.list ? forecastItems.list : null
        })
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(weatherDay => 
        <ForecastItem 
            key={`${weatherDay.weekDay}${weatherDay.hour}`} 
            weekday={weatherDay.weekDay} 
            hour={weatherDay.hour} 
            data={weatherDay.data} 
        />)
    }

    renderProgress() {
        return <h3>cargando pronostico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido {city}</h2>
                { forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;