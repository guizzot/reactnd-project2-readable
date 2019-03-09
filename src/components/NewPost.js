import React, { Component, Fragment } from 'react'
import { handleAddPost } from '../actions/posts'
import { connect } from 'react-redux'
import { Button, Alert,Form } from 'react-bootstrap'

class NewPost extends Component {
  state = {
    title: '',
    category: '',
    body: '',
    user:'',
    sitSubmit: false,
  }

  handleChange = (e) => {
    const stateItem = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [stateItem]: value,
      sitSubmit: false
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddPost(
      this.state.title,
      this.state.category,
      this.state.body,
      this.state.user
    ))

    this.setState(() => ({
      title: '',
      category: '',
      body: '',
      user:'',
      sitSubmit: true,
    }))
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='user'>Nome</label>
            <br/>
            <input
              type='text'
              id='user'
              value={this.state.user}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor='title'>Título</label>
            <br/>
            <input
              type='text'
              id='title'
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor='category'>Categoria</label>
            <br/>
            <select onChange={this.handleChange} value={this.state.category} id='category' required>
              <option value=""></option>
              {Object.keys(this.props.categories).map(c =>
                <option value={this.props.categories[c].path} key={this.props.categories[c].path}>
                  {this.props.categories[c].path}
                </option>
              )}
            </select>
          </p>
          <p>
            <label htmlFor='body'>Content</label>
            <textarea
              value={this.state.body}
              onChange={this.handleChange}
              className='textarea'
              id='body'
              required
            />
          </p>
          <Button type="submit" variant="dark">
            Criar
          </Button>
          {this.state.sitSubmit &&
            <Alert variant="success">
              Sua postagem foi criada.
            </Alert>
          }
        </Form>
      </Fragment>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(NewPost)