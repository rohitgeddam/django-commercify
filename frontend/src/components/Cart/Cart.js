import CartItem from '../CartItem/CartItem';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Cart = ({handleCartVisibility}) => {
    const cart = useSelector(state => state.cart)
    const cartItems = cart.cartItems;

    useEffect(() => {

    }, [cart])

    return (
        <div className="absolute  right-0 top-0 min-h-screen bg-gray-300 w-full z-50 md:w-5/12 p-10">

            <div onClick={handleCartVisibility} className="text-white absolute right-0 top-0 mt-5 mx-5">
                {/* close button */}
                <i class="fa fa-times fa-2x" aria-hidden="true"></i>
            </div>

            <div className="flex flex-col mt-20">
                {/* CartItem List */}
                {
                    cartItems.map((item) => (
                        <CartItem/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Cart;