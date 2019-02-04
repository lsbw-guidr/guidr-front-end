import {REGISTER_NEW_USER, LOGIN_USER, LOGIN_SUCCESS} from '../actions/index'

const initialState = {
    isUserLoggedIn: false,
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            }
        default:
            return state
    }
}

export default rootReducer