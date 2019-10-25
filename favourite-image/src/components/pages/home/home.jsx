import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';

class home extends Component {
render() {
    return (
            <Container>
            <Row>
                <Col xs>
                <Card bg="info" text="white" style={{ width: '20rem', marginTop: '2rem', textAlign: 'center', height: '10rem' }}>
                    <Card.Body style={{ margin: '2rem auto', fontSize: '25px' }}>
                    <Link to="/album1" style={{color: 'white', textDecoration: 'none'}}>Album 1</Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs>
                <Card bg="info" text="white" style={{ width: '20rem', marginTop: '2rem', textAlign: 'center', height: '10rem' }}>
                    <Card.Body style={{ margin: '2rem auto', fontSize: '25px' }}>
                    <Link to="/album2" style={{color: 'white', textDecoration: 'none'}}>Album 2</Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs>
                <Card bg="info" text="white" style={{ width: '20rem', marginTop: '2rem', textAlign: 'center', height: '10rem' }}>
                    <Card.Body style={{ margin: '2rem auto', fontSize: '25px' }}>
                    <Link to="/album3" style={{color: 'white', textDecoration: 'none'}}>Album 3</Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs>
                <Card bg="info" text="white" style={{ width: '20rem', marginTop: '2rem', textAlign: 'center', height: '10rem' }}>
                    <Card.Body style={{ margin: '2rem auto', fontSize: '25px' }}>
                    <Link to="/album4" style={{color: 'white', textDecoration: 'none'}}>Album 4</Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs>
                <Card bg="info" text="white" style={{ width: '20rem', marginTop: '2rem', textAlign: 'center', height: '10rem' }}>
                    <Card.Body style={{ margin: '2rem auto', fontSize: '25px' }}>
                    <Link to="/album5" style={{color: 'white', textDecoration: 'none'}}>Album 5</Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default home