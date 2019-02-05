import axios from "axios";

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const FETCHING_USER_INFO = 'FETCHING_USER_INFO'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

export const FETCHING_TRIPS = 'FETCHING_TRIPS'
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS'
export const registerNewUser = (state) => dispatch => {
    dispatch({type: REGISTER_NEW_USER})
    axios
        .post('https://guidr-api.herokuapp.com/auth/register', state)
        .then(res => {
            console.log(res)
            localStorage.setItem("loginToken", `${res.data.token}`)
            localStorage.setItem("userId", `${res.data.id}`)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
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
            localStorage.setItem("userId", `${res.data.id}`)
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
        .get(`https://guidr-api.herokuapp.com/user/trips/${id}/all`, options)
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCH_TRIPS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}
export const getUserInfo = id => dispatch => {
    const token = localStorage.getItem('loginToken')
    const options = {
        headers: {
            Authorization: token,
        }
    }
    dispatch({type: FETCHING_USER_INFO})
    axios
        .get(`https://guidr-api.herokuapp.com/user/guides/${id}`, options)
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    
}