import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';
import { setSelectedCity } from './../actions';

class LocationListContainer extends Component {

    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectionLocation} ></LocationList>
        );
    }
};

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired, //valida que venda como propiedad setCity
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setCity : value => dispatch(setSelectedCity(value))
  });
  
export default connect(null, mapDispatchToProps)(LocationListContainer);