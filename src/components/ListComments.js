import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentVotes from './CommentVotes'
import ModalEditComment from './ModalEditComment'
import ModalNewComment from './ModalNewComment'
import { handleDeleteComment } from '../actions/comments'
import { Card, Button, Alert } from 'react-bootstrap'

class ListComments extends Component {
  state = {
    commentEditMode: null,
    showEdit:false,
    showComment:false
  }
  handleRemove = (e, comment) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(handleDeleteComment(comment))
  }

  handleClose = () => {
    this.setState(() => ({
        showEdit:false,
        showComment:false
      }))
  }

  handleShowEdit = (e, commentId) => {
    this.setState(() => ({
      commentEditMode: this.state.commentEditMode === commentId ? null : commentId,
      showEdit:true
    }))
  }

  handleShowComment = () => {
    this.setState(() => ({
        showComment:true
    }))
  }

  render() {
    const { postId, comments } = this.props
    
    return (
      <Card className="comments">
        <Card.Header>
          <h3>Comentários</h3>  
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Button variant="dark" onClick={this.handleShowComment}>
                Novo Comentário
            </Button>
            <ModalNewComment 
                postId={postId} 
                show={this.state.showComment}
                handleClose={this.handleClose}
            />
            {comments && Object.keys(comments).length > 0
              ? Object.keys(comments).map(comment =>

                  <Card key={comments[comment].id} className='comment-list-item'>
                    <Card.Body>
                      <Card.Text> 
                      <div className='comment-buttons'>
                        <Button onClick={(e) => this.handleShowEdit(e, comments[comment].id)} variant="dark">
                          Editar
                        </Button>
                        <Button onClick={(e) => this.handleRemove(e, comments[comment])} variant="dark">
                          Remover
                        </Button>
                      </div>
                      <ul>
                        <li>
                          <h4>{comments[comment].body}</h4>
                        </li>
                        <li>
                          <h5>Autor: {comments[comment].author}</h5>
                        </li>
                      </ul>
                      <CommentVotes commentId={comments[comment].id} voteScore={comments[comment].voteScore} postId={comments[comment].parentId} />
                      {this.state.commentEditMode === comments[comment].id &&
                          <ModalEditComment   
                              comment={comments[comment]} 
                              show={this.state.showEdit}   
                              handleClose={this.handleClose}     
                          />
                      }
                      </Card.Text>
                    </Card.Body>
                  </Card>

                )
              : <Alert variant="warning">
                  Nenhum comentário! Seja o primeiro a comentar!
                </Alert>
            }
      </Card.Text>
    </Card.Body>
  </Card>
    )
  }
}

function mapStateToProps ({comments}, {postId}) {
  return {
    comments: comments[postId]
  }
}

export default connect(mapStateToProps)(ListComments)