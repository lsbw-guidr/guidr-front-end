import axios from "axios";

export const REGISTERING_NEW_USER = "REGISTER_NEW_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const FETCHING_USER_INFO = "FETCHING_USER_INFO";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const LOGOUT_USER = "LOGOUT_USER";

export const registerNewUser = state => dispatch => {
  dispatch({ type: REGISTER_NEW_USER });
  axios
    .post("https://guidr-backend.herokuapp.com/auth/register", state)
    .then(res => {
      console.log(res);
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
      console.log(res);
      localStorage.setItem("loginToken", `${res.data.token}`);
      localStorage.setItem("userId", `${res.data.id}`);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
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
      console.log(res);
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
