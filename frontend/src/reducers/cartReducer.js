import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../constants/cartConstants';

export const cartReducer = (state={cartItems:[]}, action) => {
    

    switch(action.type) {
       
        case ADD_TO_CART:
            const product = action.payload
            const productId = product.id

            state.cartItems = state.cartItems.map( (item) => {
                if(item.id === productId){
                    return product
                }
                return item;
            })

        case REMOVE_FROM_CART:
            const id = action.payload.id

            state.cartItems = state.cartItems.filter( (item) => item.id !== id )

        default:
            return state
    }
}