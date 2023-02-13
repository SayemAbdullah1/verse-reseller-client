import React from 'react';

const ProductsCart = ({ product }) => {
    const { image } = product
    return (
        <div className='border shadow-lg hover:scale-105 duration-300 object-cover'>
            <img src={image} alt='' className='w-full h-[200px] object-cover rounded-t-lg' />
        </div>
    );
};

export default ProductsCart;