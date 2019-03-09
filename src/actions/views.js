import { getHomeData, getCategoryData, getAllCategories, getPostData } from '../utils/api'
import { setAllCategories } from './categories'
import { setAllPosts, addPost } from './posts'
import { setAllCommentsForPost } from './comments'
import { showLoading, hideLoading } from 'react-redux-loading'

//const AUTHED_ID = 'thingone'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getHomeData().then(({categories, posts}) => {
      dispatch(setAllCategories(categories))
      dispatch(setAllPosts(posts))
      dispatch(hideLoading())
    })
    .catch(error =>  console.warn(error))
  }
}

export function handleCategoryData (categoryPath) {
  return (dispatch) => {
    dispatch(showLoading())
    return getCategoryData(categoryPath).then(({categories, posts}) => {
      dispatch(setAllCategories(categories))
      dispatch(setAllPosts(posts))
      dispatch(hideLoading())
    })
    .catch(error =>  console.warn(error))
  }
}

export function handlePostNewData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getAllCategories().then(categories => {
      dispatch(setAllCategories(categories))
      dispatch(hideLoading())
    })
    .catch(error =>  console.warn(error))
  }
}

export function handlePostEditData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getHomeData().then(({categories, posts}) => {
      dispatch(setAllCategories(categories))
      dispatch(setAllPosts(posts))
      dispatch(hideLoading())
    })
    .catch(error =>  console.warn(error))
  }
}

export function handlePostData (id) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { posts } = getState()

    return getPostData(id).then(({categories, post, comments}) => {
      dispatch(setAllCategories(categories))
      if(posts && posts[id]){
        // TODO: this post are already in state, update it
        // dispatch(updatePost(post))
      } else {
        dispatch(addPost(post))
      }
      dispatch(setAllCommentsForPost(comments))
      dispatch(hideLoading())
    })
    .catch(error =>  console.warn(error))
  }
}