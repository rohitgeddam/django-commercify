const CartItem = ({item, removeItemHandler}) => {
    return (
        <div className="flex w-full bg-gray-50 rounded-md h-1/3 my-4 py-4 px-2 flex-wrap">
            <div classname="w-1/3">
                <img src={item.thumbnail} alt="image" className="w-32 h-32 m:w-48 md:h-auto md:rounded-none mx-auto" />
            </div>

            <div className="flex flex-col ml-4 flex-wrap">
                <div className="font-bold flex flex-wrap overflow-hidden">
                    {item.name}
                </div>

                <div className="font-semibold text-gray-500">
                    Price - {item.price}
                </div>
                <div className="font-semibold text-gray-500">
                    Quantity - {item.quantity}
                </div>

                <div className="font-bold text-gray-800 mt-auto">
                    <span className="font-semibold text-gray-500">Total </span>{item.price * item.quantity}
                </div>

            </div>

            <div className="ml-auto px-5">
                <button onClick={() => removeItemHandler(item.id)} ><i class="fa fa-times fa-1x text-black" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}
 
export default CartItem;