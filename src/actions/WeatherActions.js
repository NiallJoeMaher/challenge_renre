import {
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_LOADING,
  FETCH_FORECAST_ERROR,
  UPDATE_SEARCH
} from '../actions/actionTypes';

export function fetchForecastErrored() {
  return {
    type: FETCH_FORECAST_ERROR
  };
}

export function fetchForecastLoading() {
  return {
    type: FETCH_FORECAST_LOADING
  };
}

export function fetchForecastSuccess(forecast) {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: forecast
  };
}

export function updateSearch(location, unit) {
  return {
    type: UPDATE_SEARCH,
    payload: { location, unit}
  };
}

export function fetchForecast(location, unit) {
  return function(dispatch) {
    dispatch(fetchForecastLoading());
    dispatch(updateSearch(location, unit));
    // for readability on the query we create the query with out the concating parameters
    const YMLQuery = `select * from weather.forecast(0, 3) where woeid in (select woeid from geo.places(1) where text="${location}") and u='${unit}'`;
    // concat the parameters to query through URL
    const urlifiedQuery = YMLQuery.split(' ').join('%20');
    fetch(`https://query.yahooapis.com/v1/public/yql?q=${urlifiedQuery}&limit=3&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then(resp => resp.json()) // Transform the data into json
    .then(data => data.query.results.channel.item.forecast) // Take the object we care about from the data
    .then(data => {
      dispatch(fetchForecastSuccess(data));
    })
    .catch(() => {
      dispatch(fetchForecastErrored());
    });
  };
}
