//Since this app will be like a blog, it will have a list of posts, and we'll put that in the postsReducer in a moment. Having this combineReducers method allows us to bring whatever we want in - a commentsReducer, an authReducer, and so on.


//In reducers/index.js, we will create the file that will combine all reducers. 
import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
const rootReducer = combineReducers({
    posts: postsReducer,
  }) 
  export default rootReducer
