import CartItem from '../CartItem/CartItem';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeItemFromCart} from '../../actions/cartActions';
import { useHistory } from 'react-router-dom';



const Cart = ({handleCartVisibility}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const cartItems = cart.cartItems;

    const handleCheckout = () => {
        history.push('/login?redirect=shipping')
    }

    const getTotal = () => {
        let sum = 0;
        // cartItems.forEach((i) => { sum = sum + (i.price * i.quantity) })
        // console.log(sum)
        sum = cartItems.reduce((sum, item) => sum + (item.price * item.quantity),0)
        console.log("SUM",sum)
        return sum;
    }
    const removeItemHandler = (id) => {

        dispatch(removeItemFromCart(id));
    }

    const isCheckoutDisabled = () => {
        if(cartItems.length <= 0) return true;
        return false
    }

    useEffect(() => {
        console.log("I RAN NOW")
    }, [cartItems, dispatch])

    return (
        <div className="absolute  flex flex-col right-0  bottom-0 min-h-full bg-gray-100 w-full z-50 md:w-5/12 p-10">
            <div>
                <div className="font-semibold text-gray-600">
                    Your Cart ({cartItems.length})
                </div>
                <div onClick={handleCartVisibility} className="text-white absolute right-0 top-0 mt-5 mx-5">
                    {/* close button */}
                    <i class="fa fa-times fa-2x text-black" aria-hidden="true"></i>
                </div>
            </div>
           

            <div className="flex flex-col mt-20 items-center">
                {/* CartItem List */}
                {
                    cartItems.length <= 0 ?
                    <div className="text-bold text-gray-500 text-2xl">
                        Your cart is empty
                    </div> :
                    <>
                    </>
                }
                {
                    cartItems.map((item) => (

                        <CartItem item={item} removeItemHandler={removeItemHandler}/>


                    ))
                }
            </div>

            <div className="flex flex-col items-center mt-auto border-t-2">
                <div className="text-gray-800 text-bold text-xl mt-4">
                    Cart Total: {getTotal()}
                </div>
                <div className="w-full my-4">
                    <button className="w-full text-white text-lg text-bold bg-blue-500 p-2 rounded-full" onClick = {handleCheckout} disabled={cartItems.length <= 0}>
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;