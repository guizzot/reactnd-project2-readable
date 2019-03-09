import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/views'
import ListPosts from './ListPosts'
import Order from './Order'
import Header from './Header'
import { Container, Row, Col } from 'react-bootstrap'
import { orderPosts } from '../utils/helpers'

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Row className="justify-content-md-center">
            <Col md="12" className="text-center">
              <h3>Página Inicial</h3>
            </Col>
          </Row>
        </Container>
        <hr className="spacer"/>
        <Container>
          {this.props.loading === 0
            ? <React.Fragment>
                <Order />
                <ListPosts postsIds={this.props.postsIds} />
              </React.Fragment>
            : <p>Loading...</p>
          }
        </Container>
      </React.Fragment>
    )
  }
}

function mapStateToProps ({posts, loadingBar,order}) {
  const orderByPosts = order.orderBy
  const postsIds = orderPosts(orderByPosts, posts)

  return {
    postsIds,
    loading: loadingBar.default,
    orderByPosts,
  }
}

export default connect(mapStateToProps)(Dashboard)