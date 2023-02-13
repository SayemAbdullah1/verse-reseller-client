import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCart = ({ singleCat }) => {
    const { image, category, category_id } = singleCat
    return (
        <div className='rounded-xl relative'>
            <div className='absolute text-white bg-black/40 w-full h-full rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4 mb-6'>{category}</p>
                
                <Link to={`/category/${category_id}`}>

                <button className='btn btn-secondary border-white mt-3 text-black mx-2 bottom-4'>See All Products</button>
                </Link>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={image} alt="/" />
        </div>
    );
};

export default CategoryCart;