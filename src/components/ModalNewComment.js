import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/comments'
import { Modal, Button, Alert } from 'react-bootstrap'

class ModalNewComment extends Component {
    state = {
        body: '',
        user:'',
        sitSubmit: false,
      }
    
      handleChange = (e) => {
        const stateItem = e.target.id
        const value = e.target.value
    
        this.setState(() => ({
          [stateItem]: value
        }))
    
        if(e.target.value) {
          this.setState(() => ({
            sitSubmit: false,
          }))
        }
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
    
        this.props.dispatch(handleAddComment(
          this.props.postId,
          this.state.body,
          this.state.user
        ))
    
        this.setState(() => ({
          body: '',
          user:'',
          sitSubmit: true,
        }))
      }

    render() {

        const { handleClose, show} = this.props

        return (
            <React.Fragment>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Criando novo comentário!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit} className='comment-form'>
                        <p>
                            <label htmlFor='user'>Nome</label>
                            <br/>
                            <input
                            value={this.state.user}
                            onChange={this.handleChange}
                            id='user'
                            required
                            />
                        </p>
                        <p>
                            <label htmlFor='body'>Digite o que deseja:</label>
                            <textarea
                            value={this.state.body}
                            onChange={this.handleChange}
                            className='textarea'
                            id='body'
                            required
                            />
                        </p>
                        {this.state.sitSubmit &&
                            <Alert variant="success">
                              Comentário criado!
                            </Alert>
                        }
                        <Button type="submit" variant="dark">
                          Salvar
                        </Button>
                        </form>
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
  
export default connect()(ModalNewComment)