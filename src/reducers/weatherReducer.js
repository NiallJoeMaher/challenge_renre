import initialState from './initialState';
import {
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_LOADING,
  FETCH_FORECAST_ERROR,
  UPDATE_SEARCH
} from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECAST_ERROR:
      return {
        ...state,
        hasErrored: true,
        isLoading: false
      };
    case FETCH_FORECAST_LOADING:
      return {
        ...state,
        hasErrored: false,
        isLoading: true
      };
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        hasErrored: false,
        isLoading: false,
        forecast: action.payload
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        location: action.payload.location,
        unit: action.payload.unit
      };
    default:
      return state;
  }
}
