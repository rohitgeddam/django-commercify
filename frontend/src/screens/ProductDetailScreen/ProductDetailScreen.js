import {getFakeProduct} from '../HomeScreen/HomeScreen'
import {Dropdown, Button} from 'semantic-ui-react';


const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

const ProductDetailScreen = ({match}) => {
    const productData = getFakeProduct()
    console.log(productData)
    return (
        <div className="flex flex-col  h-auto w-full p-4">

            <div className="flex flex-col md:flex-row mt-4">

                <img src={productData.thumbnail_url} alt="" class="flex-none inset-0 w-full md:w-2/4  h-full object-left-top object-scale-down md:object-cover" />

                <div className="flex-auto mt-4 px-4 w-full md:w-1/6 lg:w-1/6">

                    <h1 class="flex-auto text-xl font-semibold">
                        {productData.product_name}
                    </h1>
                    <div class="text-xl font-semibold text-gray-500">
                        ${productData.price}
                    </div>
                    <div className="w-full mt-4 rounded-md">
                        <Dropdown placeholder="--Select--" clearable options={options} selection className="w-full rounded-md"/>
                    </div>

                

                    <div className="w-full mt-4">
                        <Button secondary className="w-full" circular>
                            ADD TO CART
                        </Button>
                    </div>

                    <div className="w-full mt-8">
                    <p className="font-semibold text-xl text-gray-500">Description</p>
                    <div className="font-light text-md">
                        {productData.description}
                    </div>
                </div>

                </div>

            </div>

            <div className="w-full mt-8 flex flex-col">
                    <p className="font-semibold text-xl text-gray-500">More Images</p>
 
                    {

                    productData.images.map((image) => {

                        return (
                            <img src={image} className="w-full md:w-2/4 my-4 rounded-md object-scale-down md:object-cover"/>
                        )
                    })
                    }
                </div>

        </div>
    );
}
 
export default ProductDetailScreen;