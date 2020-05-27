import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbal from '@material-ui/core/Toolbar';
// import WheatherLocation from './components/WeatherLocation';
import LocationListContainer from './containers/LocationListContainer';
import ForectastExtendedContainer from './containers/ForectastExtendedContainer';

const cities = [
  'Santiago,chi',
  'Barcelona,es',
  'Tokyo,jap',
  'Sao Paulo,bra',
  'Alaska,us',
  'Cancun,mx',
]

class App extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          <AppBar position='sticky'>
            <Toolbal>
              <Typography color='inherit'>Weather App</Typography>
            </Toolbal>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForectastExtendedContainer /> 
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;