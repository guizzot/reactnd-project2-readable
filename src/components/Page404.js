import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap';

class Page404 extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
            <Row>
                <h3>O que você procura não existe mais :(</h3>
            </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Page404