import React, { Component } from 'react'
import ListPosts from './ListPosts'
import Header from './Header'
import Order from './Order'
import { connect } from 'react-redux'
import { handleCategoryData } from '../actions/views'
import { orderPosts } from '../utils/helpers'
import { Container, Row, Col } from 'react-bootstrap'

class Categories extends Component {
  state = {
    currentCategory: '',
  }

  componentDidMount() {
    this.setState(() => ({
      currentCategory: this.props.match.params.category
    }))
    this.props.dispatch(handleCategoryData(this.props.match.params.category))
  }

  componentDidUpdate() {
    if (this.state.currentCategory !== this.props.match.params.category) {
      this.setState(() => ({
        currentCategory: this.props.match.params.category
      }))
      this.props.dispatch(handleCategoryData(this.props.match.params.category))
    }
  }

  render() {
    const { pIds } = this.props
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Row className="justify-content-md-center">
            <Col md="12" className="text-center">
            <h3>Categoria - {this.props.match.params.category}</h3>
            </Col>
          </Row>
        </Container>
        <hr className="spacer"/>
        <Container>
          {this.props.loading === 0
            ? <React.Fragment>
                <Order />
                <ListPosts postsIds={pIds} />
              </React.Fragment>
            : <p>Loading...</p>
          }
        </Container>
      </React.Fragment>
    )
  }
}

function mapStateToProps ({posts, loadingBar, order}) {
    const orderByPosts = order.orderBy
    const pIds = orderPosts(orderByPosts, posts)
    
    return {
        pIds,
        loading: loadingBar.default,
    }
}

export default connect(mapStateToProps)(Categories)