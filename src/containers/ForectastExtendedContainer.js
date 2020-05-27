import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';
import { getForecastDataFromCities } from './../reducers/cities';

class ForectastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props
        return (
            city &&
            <ForecastExtended city={city} forecastData={forecastData} />
        )
    }
}

ForectastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

const mapStateToProps = state => ({ city: state.city, forecastData: getForecastDataFromCities(state.cities, state.city) });

export default connect(mapStateToProps, null)(ForectastExtendedContainer);
