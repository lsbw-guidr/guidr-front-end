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

import { toast } from "react-toastify";
const initialState = {
  loading: false,
  deletingTrip: false,
  addingTrip: false,
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
        addingTrip: true
      };
    case ADD_TRIP_SUCCESS:
      toast.info("Trip successfully added.");
      return {
        ...state,
        addingTrip: false
      };
    case UPDATING_TRIP:
      return {
        ...state,
        loading: true
      };
    case UPDATE_TRIP_SUCCESS:
      toast.info("Trip info successfully updated.");
      return {
        ...state,
        loading: false
      };
    case DELETING_TRIP:
      return {
        ...state,
        deletingTrip: true
      };
    case DELETE_TRIP_SUCCESS:
      toast.info("Trip successfully deleted.");
      return {
        ...state,
        deletingTrip: false
      };
    case LOGOUT_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
