import React, { Component } from 'react'

export const FavouriteQantity = (favouriteItems) => {
    return favouriteItems.reduce((acc, item) => {
        const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
        filteredItem !== undefined
        ? filteredItem.quantity++
        : acc.push({ ...item, quantity: 1 })
        return acc
    }, [])
}