import React, { Component } from 'react';
import './index.css';

import PropTypes from 'prop-types';

class WeatherCard extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    highValue: PropTypes.string.isRequired,
    lowValue: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired
  };

  render() {
    const className = 'c-WeatherCard';
    const { date, highValue, lowValue, day } = this.props;
    return (
      <div className={className}>
        <div className={`${className}__date`}>{`${day} ${date}`}</div>
        <div className={`${className}__value`}>
          <span className={`${className}__value-text`}>Highs of </span>
          &deg;{highValue}
        </div>
        <div className={`${className}__value`}>
          <span className={`${className}__value-text`}>Lows of </span>
          &deg;{lowValue}
        </div>
      </div>
    );
  }
}

export default WeatherCard;
