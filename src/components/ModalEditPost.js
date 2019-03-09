import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePostEditData } from '../actions/views'
import  PostEdit  from './PostEdit'
import { Modal, Button } from 'react-bootstrap'

class ModalEditPost extends Component {
    componentDidMount() {
        this.props.dispatch(handlePostEditData())
    }

    render() {

        const { handleClose, show} = this.props

        return (
            <React.Fragment>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Edit Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PostEdit post={this.props.post} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

function mapStateToProps ({loadingBar, posts}, props) {
    console.log(props.id)
    return {
      loading: loadingBar.default,
      post: posts[props.id]
    }
  }
  
  export default connect(mapStateToProps)(ModalEditPost)