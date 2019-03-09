import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setOrder } from '../actions/order'
import { Button } from 'react-bootstrap'

class Order extends Component {
  handleOrder = (e, sort) => {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(setOrder(sort))
  }

  render() {
    return (
      <React.Fragment>
        <h4>Ordenar Por: </h4>
        <br/>
        {Object.keys(this.props.orderByPosts).map(s =>
            <Button  key={s} onClick={(e) => this.handleOrder(e, s)} variant="dark">
                {s}
            </Button>
        )}
      </React.Fragment>
    )
  }
}

function mapStateToProps ({order}) {
  const orderByPosts = order.orderBy
  return {
    orderByPosts,
  }
}

export default connect(mapStateToProps)(Order)