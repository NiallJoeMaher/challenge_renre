import React, { Component } from 'react';
import WeatherForecast from '../../containers/WeatherForecast';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className='c-App'>
        <WeatherForecast />
      </div>
    );
  }
}

export default App;
