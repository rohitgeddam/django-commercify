import {getFakeProduct} from '../HomeScreen/HomeScreen'

const ProductDetailScreen = ({match}) => {
    const productData = getFakeProduct()
    console.log(productData)
    return (
        <div className="flex flex-col h-screen w-full">
            <div class="flex-none relative w-full md:w-3/6 h-3/6">
                <img src={productData.thumbnail_url} alt="" class="absolute inset-0 w-full h-full object-scale-down" />
            </div>
            <div className="flex-auto mt-4 px-4">

                <h1 class="flex-auto text-xl font-semibold">
                    {productData.product_name}
                </h1>
                <div class="text-xl font-semibold text-gray-500">
                    ${productData.price}
                </div>

            </div>
        </div>
    );
}
 
export default ProductDetailScreen;