const CartItem = ({item, removeItemHandler}) => {
    return (
        <div className="flex w-full bg-gray-50 rounded-md h-1/3 my-4 py-4 px-2 flex-wrap">
            <div classname="w-1/3">
                <img src={item.thumbnail} alt="image" className="w-32 h-32 m:w-48 md:h-auto md:rounded-none mx-auto" />
            </div>

            <div className="flex flex-col ml-4">
                <div className="font-bold flex flex-wrap overflow-hidden">
                    {item.name}
                </div>

                <div className="font-semibold text-gray-500">
                    {item.price}
                </div>
            </div>

            <div>
                <button onClick={() => removeItemHandler(item.id)}>Remove</button>
            </div>
        </div>
    );
}
 
export default CartItem;