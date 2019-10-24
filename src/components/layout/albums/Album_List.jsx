import React, { Component } from 'react';

// Bootstrap
import {
    Card,
    Button,
    Col,
    Badge
} from 'react-bootstrap';

export class Album_List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.data;
        const itemInFavourite = this.props.favourite.filter(item => item.id === data.id)[0]
        return (
            <Col xs>
                <Card style={{ width: '18rem', marginTop: '2rem' }}>
                <Card.Img variant="top" src={data.thumbnailUrl} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>

                    <Button variant="primary" onClick={() => this.props.addToFavourite(data)} disabled={itemInFavourite}>
                    <i className="fas fa-heart"></i>
                    <Badge variant="primary">{
                        itemInFavourite && itemInFavourite.quantity || 0
                    }</Badge>
                    </Button>

                    {
                        itemInFavourite
                        ? (<Button variant="primary" onClick={() => this.props.removeFromFavourite(itemInFavourite)}>
                            <i className="fas fa-trash"></i>
                            </Button>)
                        :null
                    }

                </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Album_List
