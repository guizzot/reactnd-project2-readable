import { combineReducers } from 'redux'
import order from './order'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  order,
  categories,
  posts,
  comments,
  loadingBar: loadingBarReducer,
})