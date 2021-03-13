// import {getFakeProduct} from '../HomeScreen/HomeScreen'
import {useEffect, useState} from "react";
import {Dropdown, Button} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import './ProductDetailScreen.scss'

// const options = [
//     { key: 1, text: 'Choice 1', value: 1 },
//     { key: 2, text: 'Choice 2', value: 2 },
//     { key: 3, text: 'Choice 3', value: 3 },
//   ]



const ProductDetailScreen = ({match}) => {
    let history = useHistory();
    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState({})
    // const product = getFakeProduct()
    // console.log(product)
    const incrementQuantity = () => {
        
        setQuantity((prev) => {
            return prev + 1 > product.stock_count ? prev : prev+1; 
        });
    }
    
    const decrementQuantity = () => {
        setQuantity((prev) => {
            return prev - 1 <= 0 ? prev : prev - 1;
        });
    }

    useEffect(()=>{
        const fetchProduct = async () => {
            const response = await axios.get(`/api-v1/products/${match.params.id}`);
            const product = response.data;

            setProduct(product);
        }
        fetchProduct();
    },[match.params.id])
    return (
        <div className="flex flex-col  h-auto w-full p-4 ">
            <button onClick={history.goBack} className="w-4 h-4 md:w-6 md:h-6"><i class="fa fa-chevron-left fa-2x self-start" aria-hidden="true"></i></button>
            <div className="flex flex-col md:flex-row mt-6 md:justify-around">

                <img src={product.thumbnail} alt="" class="flex-none inset-0 w-full md:w-1/4 self-start h-full object-center md:object-left-top object-scale-down md:object-cover bg-gray-50" />

                <div className="flex-2 mt-4 px-4 w-full md:w-1/2 lg:w-1/4 md:shadow-md">

                    <h1 class="flex-auto text-xl font-semibold">
                        {product.name}
                    </h1>
                    <div class="text-xl font-semibold text-gray-500">
                        ${product.price}
                    </div>
                    {/* <div className="w-full mt-4 rounded-md">
                        <Dropdown placeholder="--Select--" clearable options={options} selection className="w-full rounded-md"/>
                    </div> */}

                    <div>
                        { product.stock_count > 0 ?

                        <span className="text-green-500 font-bold">IN STOCK <span className="text-gray-600 font-bold ">{product.stock_count}</span></span> :
                        <span className="text-red-500 font-bold">OUT OF STOCK</span>
                        }   
                    </div>

                    <div className="mt-4 flex flex-col">
                        <p className="font-semibold text-xl text-gray-500">Quantity</p>
                        <div className="mt-2 w-full flex justify-stretch">
                            <button className=" flex-1 quantity-input__modifier quantity-input__modifier--left" onClick={decrementQuantity}>
                            &mdash;
                            </button>
                            <input className="flex-1 quantity-input__screen" type="text" value={quantity} readonly />
                            <button className=" flex-1 quantity-input__modifier quantity-input__modifier--right" onClick={incrementQuantity}>
                            &#xff0b;
                            </button>  
                        </div>
                    </div>
                

                    <div className="w-full mt-4">
                        <Button secondary className="w-full" circular>
                            ADD TO CART
                        </Button>
                    </div>

                    <div className="w-full mt-8">
                    <p className="font-semibold text-xl text-gray-500">Description</p>
                    <div className="font-light text-md">
                        {product.description}
                    </div>
                </div>

                </div>

            </div>

            <div className="w-full mt-8 md:mt-16 flex flex-col">
                    <p className="font-semibold text-xl text-gray-500 md:self-center">More Images</p>
                    <div className="flex flex-row flex-wrap justify-center">
                        { 
                        product.more_images && 

                        product.more_images.map((image) => {

                            return (
                                <img src={image.image} className="w-full md:w-1/4 my-4 md:mx-4 rounded-md object-scale-down"/>
                            )
                        })
                        }
                    </div>
                    
                </div>

        </div>
    );
}
 
export default ProductDetailScreen;