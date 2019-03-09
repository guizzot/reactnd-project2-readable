import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import PostVotes from './PostVotes'
import { Card, Button } from 'react-bootstrap'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'

class PostListItem extends Component {

  render() {
    const { post } = this.props
    return (
      <React.Fragment>
        <Card>
          <Card.Header>
            <div className="card-header-title">
              <Link to={`/${post.category}/${post.id}`}>
                <Button variant="dark" block>
                  <FaAlignJustify />
                </Button>
              </Link>
              <h3>{post.title}</h3>
            </div>
          </Card.Header>
          <Card.Body>
            <React.Fragment>
              <ul>
                <li>
                  <h5>Autor: {post.author}</h5> 
                </li>
                <li>
                  <h5>Data: {formatDate(post.timestamp)}</h5>
                </li>
                <li>
                  <h5>Número de Comentários: {post.commentCount}</h5>
                </li>
              </ul>
              <PostVotes id={post.id} voteScore={post.voteScore} />
            </React.Fragment>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

function mapStateToProps ({posts}, {id}) {
  return {
    post: posts[id]
  }
}

export default connect(mapStateToProps)(PostListItem)