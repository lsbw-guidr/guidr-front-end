import {
  REGISTERING_NEW_USER,
  REGISTER_SUCCESS,
  LOGIN_USER,
  LOGIN_SUCCESS,
  CLEAR_LOGIN_ERROR,
  FETCHING_USER_INFO,
  FETCH_USER_SUCCESS,
  UPDATING_USER,
  UPDATE_USER_SUCCESS,
  LOGOUT_USER,
  LOGIN_ERROR
} from "../actions/authActions";

import { toast } from "react-toastify";

const initialState = {
  loading: false,
  isUserLoggedIn: false,
  loginError: false,
  isUserInfoUpdating: false,
  loggedInUser: {},
  userInfo: {}
};

export default function authReducer(state = initialState, action) {
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
        loading: false,
        isUserLoggedIn: true,
        loggedInUser: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: true
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...initialState
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
        isUserInfoUpdating: true,
        loading: true
      };
    case UPDATE_USER_SUCCESS:
      toast.info("User info successfully updated.");
      return {
        ...state,
        isUserInfoUpdating: false,
        loading: false
      };
    case LOGOUT_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
