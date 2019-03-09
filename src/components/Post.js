import React, { Component, Fragment } from 'react'
import Header from './Header'
import ListComments from './ListComments'
import PostVotes from './PostVotes'
import ModalEditPost from './ModalEditPost'
import { connect } from 'react-redux'
import { handlePostData } from '../actions/views'
import { handleDeletePost } from '../actions/posts'
import { formatDate } from '../utils/helpers'
import { Redirect } from 'react-router-dom'
import { Card, Button, Alert } from 'react-bootstrap'

class Post extends Component {
    state = {
        deletedFlag: false,
        redirectFlag: false,
        show:false
    }

    componentDidMount() {
        this.props.dispatch(handlePostData(this.props.match.params.id))
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShowEdit = () => {
        this.setState({ show: true });
    }

    handleRemove = (e) => {
        e.preventDefault()

        const { dispatch, post } = this.props

        dispatch(handleDeletePost(post.id))

        this.setState(() => ({
            deletedFlag: true,
        }))
    }

  render() {
    const { post } = this.props

    if (!post && this.props.loading === 0) {
      return <Redirect to='/' />
    }

    if(this.state.redirectFlag === true) {
        return <Redirect to={'/post/edit/' + this.props.post.id} />
      }

    return (
      <Fragment>
        <Header />

            {(this.props.loading === 0 && !this.state.deletedFlag) &&
              
              <Card className="post-detail">
                <Card.Header>
                  <div className="card-header-title">
                    <h3>{post.title}</h3>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                      <React.Fragment>
                      <div className='post-buttons'>
                          <Button onClick={this.handleShowEdit} variant="dark">
                            Editar
                          </Button>
                          <Button onClick={this.handleRemove} variant="dark">
                            Remover
                          </Button>
                      </div>
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
                          <li>
                            <h4>Conteúdo: {post.body}</h4>
                          </li>
                        </ul>
                        <PostVotes id={this.props.match.params.id} voteScore={post.voteScore} />
                        <ListComments postId={this.props.match.params.id} />
                      </React.Fragment>
                  </Card.Text>
                </Card.Body>
              </Card>
            }

            {this.props.loading === 1 &&
              <p>Loading...</p>
            }

            {this.state.deletedFlag &&
              <Alert variant="danger">
                Esta postagem não existe mais!
              </Alert>
            }
            
        <ModalEditPost 
            handleClose={this.handleClose}
            id={this.props.match.params.id}
            show={this.state.show}
        />
      </Fragment>
    )
  }
}

function mapStateToProps ({posts, comments, loadingBar}, props) {
  return {
    post: posts[props.match.params.id],
    comments: comments[props.match.params.id],
    loading: loadingBar.default
  }
}

export default connect(mapStateToProps)(Post)