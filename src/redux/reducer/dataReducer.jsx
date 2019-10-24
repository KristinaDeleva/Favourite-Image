import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from '../types';

const favouriteWithoutItem = (fav, item) => fav.filter(favItem => favItem.id !== item.id);

const itemInFav = (fav, item) => fav.filter(favItem => favItem.id === item.id)[0];

const addToFav = (fav, item) => {
    const favItem = itemInFav(fav, item);
    return favItem === undefined
    ? [...favouriteWithoutItem(fav, item), { ...item, quantity: 1 }]
    : [...favouriteWithoutItem(fav, item), { ...favItem, quantity: favItem.quantity + 1 }]

}

const removeFromFav = (fav, item) => {
    return item.quantity === 1
    ? [ ...favouriteWithoutItem(fav, item) ]
    : [ ...favouriteWithoutItem(fav, item), { ...item, quantity: item.quantity - 1 } ]
}


const favouriteReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TO_FAVOURITE':
            return addToFav(state, action.payload)
        case 'REMOVE_FROM_FAVOURITE':
            return removeFromFav(state, action.payload)
        default: 
        return state
    }
}

export default favouriteReducer;