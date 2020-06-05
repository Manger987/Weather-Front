import React from 'react';
import WheatherLocation from './WeatherLocation';
import { PropTypes } from 'prop-types';
import './styles.css';



const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handle:", city);
        onSelectedLocation(city);
    }
    const strToComponent = cities => ( //solo parentesis porque solo retonara una linea
        cities.map(city => (
            <WheatherLocation
                key={city.key} 
                city={city.name} 
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)} 
                data={city.data} />
            )
        )
    );

    return (
        <div className="locationList">
            {
                strToComponent(cities)
            }
        </div>
    )
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
}

export default LocationList;