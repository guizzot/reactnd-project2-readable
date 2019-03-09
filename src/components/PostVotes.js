import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
import { handleIncreasePostVotes, handleDecreasePostVotes } from '../actions/posts'

class PostVotes extends Component {
  handleUpVote = (e) => {
    this.props.dispatch(handleIncreasePostVotes(this.props.id))
  }

  handleDownVote = (e) => {
    this.props.dispatch(handleDecreasePostVotes(this.props.id))
  }

  render() {
    return (
      <React.Fragment>
        <div className='tweet-icons' align="center">
            <FaThumbsODown className='tweet-icon' onClick={this.handleDownVote}/>
            <span>
              {this.props.voteScore}
            </span>
            <FaThumbsOUp className='tweet-icon' onClick={this.handleUpVote}/>
        </div> 
      </React.Fragment>
    )
  }
}

export default connect()(PostVotes)