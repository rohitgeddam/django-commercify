import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../constants/cartConstants';

export const cartReducer = (state={cartItems:[]}, action) => {
    

    switch(action.type) {
       
        case ADD_TO_CART:
            const product = action.payload
            
            const productAlreadyInCart = state.cartItems.find(item => item.id === product.id)
            console.log(productAlreadyInCart, "ALREAY")

            if(productAlreadyInCart){
                return {
                    ...state,
                    cartItems: state.cartItems.map( item => {
                        if(item.id === product.id){
                            return product
                        } else {
                            return item
                        }
                    })

                }
            } else {
               return {
                   ...state,
                   cartItems: [...state.cartItems, product]
               } 
            }

        case REMOVE_FROM_CART:
            const id = action.payload.id

            state.cartItems = state.cartItems.filter( (item) => item.id !== id )

        default:
            return state
    }
}