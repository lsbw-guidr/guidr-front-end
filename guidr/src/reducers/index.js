import {REGISTER_NEW_USER, REGISTER_SUCCESS, LOGIN_USER, LOGIN_SUCCESS, FETCHING_TRIPS, FETCH_TRIPS_SUCCESS} from '../actions/index'

const initialState = {
    isUserLoggedIn: false,
    loggedInUser: {},
    tripList: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS: 
            return {
                ...state,
                isUserLoggedIn: true,
                loggedInUser: action.payload.user
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
                loggedInUser: action.payload.user
            }
        case FETCH_TRIPS_SUCCESS:
            return {
                ...state,
                tripList: action.payload
            }
        default:
            return state
    }
}

export default rootReducer