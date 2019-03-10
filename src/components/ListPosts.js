import React from 'react'
import PostListDetail from './PostListDetail';

const ListPosts = props => {
    const { postsIds } = props
    return (
      <React.Fragment>
        {postsIds.length > 0
          ? postsIds.map((id) => (
            <PostListDetail key={id} id={id} />
            ))
          : ''
        }
      </React.Fragment>
    ) 
  
}

export default ListPosts