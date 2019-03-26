import {
  REGISTER_NEW_USER,
  REGISTER_SUCCESS,
  LOGIN_USER,
  LOGIN_SUCCESS,
  FETCHING_TRIPS,
  FETCH_TRIPS_SUCCESS,
  FETCHING_USER_INFO,
  FETCH_USER_SUCCESS,
  ADDING_NEW_TRIP,
  ADD_TRIP_SUCCESS,
  DELETING_TRIP,
  DELETE_TRIP_SUCCESS,
  UPDATING_TRIP,
  UPDATE_TRIP_SUCCESS,
  UPDATING_USER,
  UPDATE_USER_SUCCESS,
  LOGOUT_USER
} from "../actions/index";

const initialState = {
  isUserLoggedIn: false,
  isLoading: false,
  loggedInUser: {},
  userInfo: {},
  tripList: [],
  isUserInfoUpdating: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        loggedInUser: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        loggedInUser: action.payload
      };
    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        tripList: action.payload
      };
    case FETCHING_USER_INFO:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false
      };
    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        tripList: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        isUserLoggedIn: false,
        userInfo: {},
        loggedInUser: {},
        tripList: []
      };
    default:
      return state;
  }
};

export default rootReducer;
