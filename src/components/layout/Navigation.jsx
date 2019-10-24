import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import {
    Navbar,
    Nav
} from 'react-bootstrap';

class Navigation extends Component {
render() {
return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Favourite image</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favourite">
                <i className="fas fa-heart"></i>
            </Nav.Link>
            </Nav>
        </Navbar>
        )
    }
}

export default Navigation