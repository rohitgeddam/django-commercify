const Product = ({productData}) => {
    return (
        <div className="flex m-2 md:my-4 md:mx-1 w-full md:w-1/3 bg-gray-50 h-72" >
            <div class="flex-none w-48 relative">
                <img src={productData.image_url} alt="" class="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex-auto p-6">
                <div class="flex flex-wrap">
                <h1 class="flex-auto text-xl font-semibold">
                    {productData.product_name}
                </h1>
                </div>
            </div>


        </div>
    );
}
 
export default Product;