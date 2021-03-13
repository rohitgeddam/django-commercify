import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Product from '../../components/Product/Product'
import { listProducts } from '../../actions/productActions'
import { productListReducer } from '../../reducers/productReducers';

import { Card, Placeholder, Message } from 'semantic-ui-react'

// import faker from 'faker';



// export const getFakeProduct = () => {
//     const images = Array(4).fill().map((_,i) => faker.image.fashion())
//     return {
//         id: faker.random.uuid(),
//         thumbnail_url: faker.image.fashion(),
//         images: images,
//         price: faker.commerce.price(),
//         product_name: faker.commerce.productName(),
//         description: faker.commerce.productDescription(),
//         stock_count: Math.floor(Math.random() * 3),
//         category: "Saree"
//     }
// }

// const productSeedData = Array(10).fill().map((_,i) => getFakeProduct());

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList;

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    if(loading) {
        return (
            <div className="my-5 mx-5">
                <Card.Group itemsPerRow={3} className="flex flex-col items-center md:flex-row md:items-start">
                    <Card>
                    <Card.Content>
                        <Placeholder>
                        <Placeholder.Image square />
                        </Placeholder>
                    </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
                        <Placeholder>
                        <Placeholder.Image square />
                        </Placeholder>
                    </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
                        <Placeholder>
                        <Placeholder.Image square />
                        </Placeholder>
                    </Card.Content>
                    </Card>
                </Card.Group>
            </div>
           
        )
    }

    if(error){
        return (
            <div className="m-5">
                <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{error}</p>
                </Message>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap justify-start min-h-full ">
            { products && 
                products.map(
                    data => 
                        <Product productData={data} />
                    )
            }
        </div>
    );
}
 
export default HomeScreen;