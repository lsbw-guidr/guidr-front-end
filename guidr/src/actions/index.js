import axios from "axios";

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const registerNewUser = (state) => dispatch => {
    dispatch({type: REGISTER_NEW_USER})
    axios
        .post('https://guidr-api.herokuapp.com/auth/register', state)
        .then(res => {
            console.log(res)
            localStorage.setItem("registerToken", `${res.data.token}`)
        })
        .catch(error => {
            console.log(error)
        })
}
export const loginUser = (state) => dispatch => {
    dispatch({type: LOGIN_USER})
    axios
        .post('https://guidr-api.herokuapp.com/auth/login', state)
        .then(res => {
            console.log(res)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}