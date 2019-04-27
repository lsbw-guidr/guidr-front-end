import {
  REGISTERING_NEW_USER,
  REGISTER_SUCCESS,
  LOGIN_USER,
  LOGIN_SUCCESS,
  FETCHING_USER_INFO,
  FETCH_USER_SUCCESS,
  UPDATING_USER,
  UPDATE_USER_SUCCESS,
  LOGOUT_USER
} from "../actions/authActions";

const initialState = {
  loading: false,
  isUserLoggedIn: false,
  loggedInUser: {},
  userInfo: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING_NEW_USER:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUserLoggedIn: true,
        loggedInUser: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        loggedInUser: action.payload
      };
    case FETCHING_USER_INFO:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false
      };
    case UPDATING_USER:
      return {
        ...state,
        loading: true
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case LOGOUT_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
