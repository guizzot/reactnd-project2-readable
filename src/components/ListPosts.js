import React, { Component } from 'react'
import PostListDetail from './PostListDetail';

class ListPosts extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.postsIds.length > 0
          ? this.props.postsIds.map((id) => (
            <PostListDetail key={id} id={id} />
            ))
          : <p>Não há nenhuma postagem aqui.</p>
        }
      </React.Fragment>
    ) 
  }
}

export default ListPosts