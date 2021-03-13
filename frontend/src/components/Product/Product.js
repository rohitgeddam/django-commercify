import "./Product.scss";
import {Link} from 'react-router-dom'
const Product = ({productData}) => {
    return (
        <Link to={`/products/${productData.id}`} className="product-card-container flex flex-col m-2 py-2 w-full sm:w-2/6 lg:w-1/4 bg-gray-50 h-96 " >
            <div class="flex-none relative w-full h-5/6 object-center">
                <img src={productData.thumbnail} alt="" class="absolute inset-0 w-full h-full object-center object-fill md:object-scale-down" />
            </div>
            <div className="flex-auto mt-4 text-center">

                <h1 class="flex-auto text-xl font-semibold">
                    {productData.name}
                </h1>
                <div class="text-xl font-semibold text-gray-500">
                    ${productData.price}
                </div>

            </div>


        </Link>
    );
}
 
export default Product;