import {combineReducers} from 'redux'

import user from './user'
import posts from './post'

export default combineReducers({user, posts}) // exporting posts.data or whatever properties are on the post.js file's state



