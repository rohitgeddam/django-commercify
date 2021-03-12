import Product from '../../components/Product/Product'
import faker from 'faker';



const getFakeProduct = () => {
    return {
        id: faker.random.uuid(),
        image_url: faker.image.fashion(),
        price: faker.commerce.price(),
        product_name: faker.commerce.productName(),
        description: faker.commerce.productDescription()
    }
}

const productSeedData = Array(10).fill().map((_,i) => getFakeProduct());
console.log(productSeedData)
const HomeScreen = () => {
    return (
        <div className="flex flex-wrap justify-evenly">
            {
                productSeedData.map(
                    data => 
                        <Product productData={data} />
                    )
            }
        </div>
    );
}
 
export default HomeScreen;