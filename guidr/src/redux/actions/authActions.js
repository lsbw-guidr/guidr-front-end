import axios from "axios";

export const REGISTERING_NEW_USER = "REGISTER_NEW_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const CLEAR_LOGIN_ERROR = "CLEAR_LOGIN_ERROR";

export const FETCHING_USER_INFO = "FETCHING_USER_INFO";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const UPDATING_USER = "UPDATING_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

export const LOGOUT_USER = "LOGOUT_USER";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const registerNewUser = state => dispatch => {
  dispatch({ type: REGISTERING_NEW_USER });
  axios
    .post("https://guidr-backend.herokuapp.com/auth/register", state)
    .then(res => {
      localStorage.setItem("loginToken", `${res.data.token}`);
      localStorage.setItem("userId", `${res.data.id}`);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const loginUser = state => dispatch => {
  dispatch({ type: LOGIN_USER });
  axios
    .post("https://guidr-backend.herokuapp.com/auth/login", state)
    .then(res => {
      localStorage.setItem("loginToken", `${res.data.token}`);
      localStorage.setItem("userId", `${res.data.id}`);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_ERROR });
    });
};
export const clearLoginError = () => dispatch => {
  dispatch({
    type: CLEAR_LOGIN_ERROR
  });
};
export const getUserInfo = id => dispatch => {
  const token = localStorage.getItem("loginToken");
  const options = {
    headers: {
      Authorization: token
    }
  };
  dispatch({ type: FETCHING_USER_INFO });
  axios
    .get(`https://guidr-backend.herokuapp.com/user/guides/${id}`, options)
    .then(res => {
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const toggleUserUpdate = () => dispatch => {
  dispatch({ type: UPDATING_USER });
};
export const updateUser = (userId, newUser) => dispatch => {
  const token = localStorage.getItem("loginToken");
  const options = {
    headers: {
      Authorization: token
    }
  };
  dispatch({ type: UPDATING_USER });
  axios
    .put(
      `https://guidr-backend.herokuapp.com/user/guides/update/${userId}`,
      newUser,
      options
    )
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS });
    })
    .catch(err => console.log(err));
};
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
