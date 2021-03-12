import Product from '../../components/Product/Product'
import faker from 'faker';



export const getFakeProduct = () => {
    const images = Array(4).fill().map((_,i) => faker.image.fashion())
    return {
        id: faker.random.uuid(),
        thumbnail_url: faker.image.fashion(),
        images: images,
        price: faker.commerce.price(),
        product_name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        stock_count: Math.floor(Math.random() * 3),
        category: "Saree"
    }
}

const productSeedData = Array(10).fill().map((_,i) => getFakeProduct());
console.log(productSeedData)
const HomeScreen = () => {
    return (
        <div className="flex flex-wrap justify-evenly min-h-full">
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