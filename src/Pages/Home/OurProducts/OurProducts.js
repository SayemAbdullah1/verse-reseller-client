import React from 'react';
import ProductsCart from './ProductsCart';

const OurProducts = () => {
    const products = [

        {
            id: 1,
            image: 'https://images.pexels.com/photos/2896135/pexels-photo-2896135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/14347998/pexels-photo-14347998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/13592332/pexels-photo-13592332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/12088320/pexels-photo-12088320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 6,
            image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },

    ]
    
    return (
        <div className='h-screen'>
            <h2 className=" text-5xl text-center font-bold mb-24 my-6 text-secondary"> Our Products</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 pt-4 gap-6 rounded-lg' data-aos="fade-up"
                data-aos-duration="3000">
                {
                    products.map(product => <ProductsCart
                    key={product.id}
                    product={product}
                    ></ProductsCart>)
                }
            </div>
        </div>
    );
};

export default OurProducts;