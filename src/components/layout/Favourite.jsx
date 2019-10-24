import React, { Component } from 'react';

// Bootstrap
import { 
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';

function Favourite(props) {
        return <Container>
            <Row>
                 {
                    props.favourite.map((item) => (
                        <Col xs key={item.id}>
                        <Card style={{ width: '18rem', marginTop: '2rem' }}>
                        <Card.Img variant="top" src={item.thumbnailUrl} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Button variant="primary" onClick={() => props.removeFromFav(item)}>
                            <i className="fas fa-trash"></i>
                            </Button>
                        </Card.Body>
                        </Card>
                        </Col>
                    ))
                 }
                 </Row>
          </Container>
}

const mapStateToProps = (state) => ({
    favourite: state.favourite
})

const mapActionsToProps = (dispatch) => ({
    removeFromFav: (item) => {
        dispatch({ type: 'REMOVE_FROM_FAVOURITE', payload: item })
    }
})

export default connect(mapStateToProps, mapActionsToProps)(Favourite)