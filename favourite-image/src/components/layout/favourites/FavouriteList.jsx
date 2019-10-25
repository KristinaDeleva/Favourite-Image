import React, { Component } from 'react';
import Favourite from './Favourite';

class FavouriteList extends Component {
    render() {
        return (
            <div>
                <h1>My favourite image</h1>
                <Favourite />
            </div>
        )
    }
}

export default FavouriteList
