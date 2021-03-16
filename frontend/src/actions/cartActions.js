import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../constants/cartConstants';
import axios from 'axios';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api-v1/products/${id}`)

    const product = {
            id: data.id,
            name: data.name,
            thumbnail: data.thumbnail,
            price: data.price,
            stock_count: data.stock_count,
            quantity: quantity,
    }
    dispatch({
        type: ADD_TO_CART,
        payload: product
    })
    
    let cartItemsLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || []
    const itemExistInLocalStorage = cartItemsLocalStorage.find( x => x.id === product.id)
    console.log("IEM ", itemExistInLocalStorage)
    if(itemExistInLocalStorage){
        cartItemsLocalStorage = cartItemsLocalStorage.filter(item => {
            return item.id !== product.id
        })
        localStorage.setItem('cartItems', JSON.stringify([...cartItemsLocalStorage, product]))
    } else {

        localStorage.setItem('cartItems', JSON.stringify([...getState().cart.cartItems, product]))
    }
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
    // let cartItemsLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || []
    // const newList = cartItemsLocalStorage.filter( item => item.id !== id);
    // localStorage.setItem('cartItems', JSON.stringify([...newList]))
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}