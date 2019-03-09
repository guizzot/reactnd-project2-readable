import React, { Component } from 'react'
import ModalPostNew from './ModalNewPost'
import { connect } from 'react-redux'
import { Container, Navbar } from 'react-bootstrap'

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const { categories } = this.props
        return (
            
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Página Principal</Navbar.Brand>
                    {Object.keys(categories).map(c =>
                        <Navbar.Brand href={`/${this.props.categories[c].path}`} key={categories[c].path} variant="link" size="sm">
                            {categories[c].path}
                        </Navbar.Brand>
                    )}
                    <Navbar.Brand href="#" onClick={this.handleShow}>
                        Nova Postagem
                    </Navbar.Brand>
                </Navbar>
                <ModalPostNew 
                    handleClose={this.handleClose}
                    handleShow={this.handleShow}
                    show={this.state.show}
                />
            </Container>
            )
        }
}

function mapStateToProps ({categories}) {
    return {
        categories
    }
}

export default connect(mapStateToProps)(Header)