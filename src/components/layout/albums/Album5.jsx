import React, { Component } from 'react';
import {FavouriteQantity} from '../FavouriteQantity';

// Bootstrap
import {
    Container,
    Row
} from 'react-bootstrap';

// Redux 
import { connect } from 'react-redux';
import Album_List from './Album_List';

class Album5 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
             <Row>
                 {
                     this.props.data.map((d) => (
                        <Album_List 
                        key={d.id} 
                        data={d}
                        addToFavourite={this.props.addToFavourite}
                        favourite={FavouriteQantity(this.props.favourite)}
                        removeFromFavourite={this.props.removeFromFavourite}
                        />
                     ))
                 }
             </Row>
          </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    favourite: state.favourite
})

const mapActionsToProps = (dispatch) => ({
    addToFavourite: (item) => {
        dispatch({ type: 'ADD_TO_FAVOURITE', payload: item })
    },
    removeFromFavourite: (item) => {
        dispatch({ type: 'REMOVE_FROM_FAVOURITE', payload: item })
    }
})
export default connect(mapStateToProps, mapActionsToProps)(Album5);
