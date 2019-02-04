import axios from "axios";

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'

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