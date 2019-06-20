//this file is the user reducer

import axios from 'axios'

const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

const LOGIN_USER = 'LOGIN_USER'
const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'

const initialState = {
    data: null
}

//this is the reducer function
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER_FULFILLED:
            return{...state, data: action.payload.data}
        case LOGIN_USER_FULFILLED:
            return{...state, data: action.payload.data}
        default:
            return state
    }
}

//action creator
export function getUser(){
    return {
        type: GET_USER,
        payload: axios.get('/auth/currentUser')
    }
}

//action creator
export function login(loginInfo) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', loginInfo)
    }
}
