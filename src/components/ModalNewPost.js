import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handlePostNewData } from '../actions/views'
import  NewPost  from './NewPost'
import { Modal, Button } from 'react-bootstrap'

class ModalNewPost extends Component {
    componentDidMount() {
        this.props.dispatch(handlePostNewData())
    }

    render() {

        const { handleClose, show} = this.props

        return (
            <React.Fragment>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Crie sua nova postagem!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewPost />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

function mapStateToProps ({loadingBar}) {
    return {
        loading: loadingBar.default,
    }
}

export default connect(mapStateToProps)(ModalNewPost)