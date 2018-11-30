import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchForecast } from '../../actions/WeatherActions';

import Switch from '../../components/Switch';
import WeatherCard from '../../components/WeatherCard';
import Button from '../../components/Button';

import './index.css';

export class WeatherForecast extends Component {
  static propTypes = {
    fetchForecast: PropTypes.func.isRequired,
    forecast: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.fetchForecast(this.props.location, 'c');
  }

  renderCards = () => (
    <div className='c-WeatherForecast__card-group'>
      {this.props.forecast.slice(0, 3).map((dayForecast, i) => (
        <WeatherCard
          key={dayForecast.date}
          date={dayForecast.date}
          label={dayForecast.day}
          day={dayForecast.day}
          highValue={dayForecast.high}
          lowValue={dayForecast.low}
        />
      ))}
    </div>
  );

  renderButtons = () => {
    const buttons = ['Dublin', 'London', 'New York'];
    return (
      <div className='c-WeatherForecast__button-group'>
        {buttons.map(button => {
          const clickHandler =
            button === this.props.location || this.props.isLoading
              ? () => {}
              : () => this.props.fetchForecast(button, this.props.unit);
          return (
            <Button
              active={button === this.props.location}
              onClick={clickHandler}
              key={button}
              text={button}
            />
          );
        })}
      </div>
    );
  };

  render() {
    const { hasErrored, forecast } = this.props;
    const className = 'c-WeatherForecast';
    if (hasErrored) {
      return (
        <div className={`${className}__error`}>
          {' '}
          Error occured, please try again...{' '}
        </div>
      );
    }
    return (
      <div className={className}>
        <div className={`${className}__header`}>RenRe Weather App</div>
        <div className={`${className}__body`}>
          {forecast.length > 0 ? (
            this.renderCards()
          ) : (
            <div className={`${className}__no-card-data`}>
              {' '}
              Checking our satelites!
            </div>
          )}
          <Switch
            leftLabel='&deg;C'
            rightLabel='&deg;F'
            onClick={() => {
              if (!this.props.isLoading)
                this.props.fetchForecast(
                  this.props.location,
                  this.props.unit === 'c' ? 'f' : 'c'
                );
            }}
            on={this.props.unit === 'c' ? false : true}
          />
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forecast: state.weather.forecast,
  hasErrored: state.weather.hasErrored,
  isLoading: state.weather.isLoading,
  unit: state.weather.unit,
  location: state.weather.location
});

const mapDispatchToProps = dispatch => ({
  fetchForecast: bindActionCreators(fetchForecast, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherForecast);
