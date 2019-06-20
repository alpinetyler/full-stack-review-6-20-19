import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'
const GET_POSTS_PENDING = 'GET_POSTS_PENDING'

const GET_POST = 'GET_POST'
const GET_POST_FULFILLED = 'GET_POST_FULFILLED'
const GET_POST_PENDING = 'GET_POST_PENDING'

let initialState = {
    data: [],
    loading: false,
    selected: null

}

//this is the reducer function
//normall we want a 
export default function (state = initialState, action) {
    switch(action.type) {
        case GET_POSTS_PENDING:
            return { ...state, loading: true}//this would show the spinning icon for loading
        case GET_POSTS_FULFILLED:
            return { ...state, data: action.payload.data}
        //normally we would want a case for GET_POSTS_PENDING

        case GET_POST_PENDING:
            return { ...state, loading: true}//this would show the spinning icon for loading
        case GET_POST_FULFILLED:
            return { ...state, loading: false, selected: action.payload.data}
        default:
            return state;
    }
}


//action creator function
export function getPosts(){
    return{
        type: GET_POSTS,
        payload: axios.get('/api/posts')
    }
}

export function getPost(id){
    return{
        type: GET_POST,
        payload: axios.get('/api/posts/${id}')
    }
}

