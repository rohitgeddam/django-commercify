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
    localStorage.setItem('cartItems', JSON.stringify([...getState().cart.cartItems, product]))
}