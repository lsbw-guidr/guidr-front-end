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
import { LOGOUT_USER } from "../actions/authActions";
const initialState = {
  loading: false,
  tripList: []
};

export default function tripReducer(state = initialState, action) {
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
    case LOGOUT_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
