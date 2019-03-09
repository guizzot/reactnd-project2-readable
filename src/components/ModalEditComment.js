import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleEditComment } from '../actions/comments'
import { Modal, Button, Alert } from 'react-bootstrap'

class ModalEditPost extends Component {
    state = {
        comment: '',
        sitSubmit: false,
      }

    componentDidMount() {
        this.setState(() => ({
          comment: this.props.comment
        }))
      }

      handleChange = (e) => {
        const stateItem = e.target.id
        const value = e.target.value
    
        this.setState(() => ({
          comment: {
            ...this.state.comment,
            [stateItem]: value
          }
        }))
    
        if(e.target.value) {
          this.setState(() => ({
            sitSubmit: false,
          }))
        }
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
    
        this.props.dispatch(handleEditComment(this.state.comment))
    
        this.setState(() => ({
          body: '',
          sitSubmit: true,
        }))
      }

    render() {

        const { handleClose, show} = this.props

        return (
            <React.Fragment>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Editando...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Fragment>
                            <form onSubmit={this.handleSubmit}>
                            <p>
                                <label htmlFor='body'>Digite o que deseja:</label>
                                <br/>
                                <textarea
                                  value={this.state.comment.body}
                                  onChange={this.handleChange}
                                  className='textarea'
                                  id='body'
                                  required
                                />
                            </p>
                            <p>
                              <Button type="submit" variant="dark">Salvar</Button>
                            </p>
                            {this.state.sitSubmit &&
                              <Alert variant="success">
                                <p>Seu comentário foi salvo.</p>
                              </Alert>
                            }
                            </form>
                        </Fragment>
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
  
export default connect()(ModalEditPost)