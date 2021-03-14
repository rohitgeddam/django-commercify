import CartItem from '../CartItem/CartItem';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeItemFromCart} from '../../actions/cartActions';

const Cart = ({handleCartVisibility}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const cartItems = cart.cartItems;

    const removeItemHandler = (id) => {
        console.log("I was called", id)
        dispatch(removeItemFromCart(id));
    }

    useEffect(() => {
        console.log("I RAN NOW")
    }, [cartItems, dispatch])

    return (
        <div className="absolute  right-0  bottom-0 min-h-full bg-gray-100 w-full z-50 md:w-5/12 p-10">
            <div>
                <div className="font-semibold text-gray-600">
                    Your Cart ({cartItems.length})
                </div>
                <div onClick={handleCartVisibility} className="text-white absolute right-0 top-0 mt-5 mx-5">
                    {/* close button */}
                    <i class="fa fa-times fa-2x text-black" aria-hidden="true"></i>
                </div>
            </div>
           

            <div className="flex flex-col mt-20">
                {/* CartItem List */}
                {
                    cartItems.map((item) => (
                        <CartItem item={item} removeItemHandler={removeItemHandler}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Cart;