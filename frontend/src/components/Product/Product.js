const Product = ({productData}) => {
    return (
        <div className="flex flex-col m-2 py-2 w-full sm:w-2/6  bg-gray-50 h-72 " >
            <div class="flex-none relative w-full h-5/6 mt-2 object-center">
                <img src={productData.image_url} alt="" class="absolute inset-0 w-full h-full object-center object-fill md:object-scale-down" />
            </div>
            <div className="flex-auto mt-4">

                <h1 class="flex-auto text-xl font-semibold">
                    {productData.product_name}
                </h1>

            </div>


        </div>
    );
}
 
export default Product;