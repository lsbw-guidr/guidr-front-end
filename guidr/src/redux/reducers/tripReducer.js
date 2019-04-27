import {
  FETCHING_TRIPS,
  FETCH_TRIPS_SUCCESS,
  ADDING_NEW_TRIP,
  ADD_TRIP_SUCCESS,
  DELETING_TRIP,
  DELETE_TRIP_SUCCESS,
  UPDATING_TRIP,
  UPDATE_TRIP_SUCCESS
} from "../actions/tripActions";

const initialState = {
  loading: false,
  tripList: []
};

export const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TRIPS:
      return {
        ...state,
        loading: true
      };
    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        tripList: action.payload
      };
    case ADDING_NEW_TRIP:
      return {
        ...state,
        loading: true
      };
    case ADD_TRIP_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case UPDATING_TRIP:
      return {
        ...state,
        loading: true
      };
    case UPDATE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case DELETING_TRIP:
      return {
        ...state,
        loading: true
      };
    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        tripList: action.payload
      };
    default:
      return state;
  }
};