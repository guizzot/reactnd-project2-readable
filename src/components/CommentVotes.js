import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIncreaseCommentVotes, handleDecreaseCommentVotes } from '../actions/comments'
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'

class CommentVotes extends Component {
  handleIncrease = (e) => {
    e.preventDefault()

    const { dispatch, commentId, postId } = this.props

    dispatch(handleIncreaseCommentVotes(commentId, postId))
  }

  handleDecrease = (e) => {
    e.preventDefault()

    const { dispatch, commentId, postId } = this.props

    dispatch(handleDecreaseCommentVotes(commentId, postId))
  }

  render() {
    return (
      <React.Fragment>
        <div className='tweet-icons' align="center">
            <FaThumbsODown className='tweet-icon' onClick={this.handleDecrease}/>
            <span>
              {this.props.voteScore}
            </span>
            <FaThumbsOUp className='tweet-icon' onClick={this.handleIncrease}/>
        </div> 
    </React.Fragment>
    )
  }
}

export default connect()(CommentVotes)