import axios from "axios";

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const FETCHING_TRIPS = 'FETCHING_TRIPS'
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS'
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
            localStorage.setItem("loginToken", `${res.data.token}`)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}
export const getTrips = id => dispatch => {
    const token = localStorage.getItem('loginToken')
    const options = {
        headers: {
            Authorization: token,
        }
    }
    dispatch({type: FETCHING_TRIPS})
    axios
        .get(`https://guidr-api.herokuapp.com/user/${id}/all`, options)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}