import React, { Component } from 'react';
import { binActionCreator, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as actions from './../actions';
import LocationList from '../components/LocationList';
import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities, getCity } from './../reducers';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city } = this.props;
        setWeather(cities); //invocacion a action creator
        setSelectedCity(city);
    }

    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectionLocation} ></LocationList>
        );
    }
};

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired, //valida que venda como propiedad setCity
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

//lo que se va a setear mediante el dispatch que se genera en los actions y se crea en el reduce posteriormente
// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch) //bindActionCreators permite crear un objeto de dispatch's (lo mismo que esta haciendo mapDispatchToProps de abajo solo que lo hace con cada accion importada)
const mapDispatchToProps = dispatch => ({
    setSelectedCity: value => dispatch(setSelectedCity(value)),//se setea como estado con el dispatch generado en la funcion de actions/index y luego implementado en el reducer. 
    setWeather: cities => dispatch(setWeather(cities))
});

//lo que se almacena en las props y esta en el state de redux que fue creado por el dispatch de las actions.-
const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer); //mapStateToProps toma estado de la aplicacion en base del connect()