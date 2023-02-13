import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCart = ({ singleCat }) => {
    const { image, category_id, name } = singleCat
    console.log(singleCat);
    return (
        <div className='rounded-xl relative'>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='absolute text-white bg-black/40 w-full h-full rounded-xl'>
                <p className='font-bold text-3xl px-2 pt-4 mb-6' data-aos="fade-up"
                    data-aos-duration="3000">{name}</p>

                <Link to={`/category/${category_id}`} data-aos="fade-up"
                    data-aos-duration="3000">

                <button className='btn btn-secondary border-white mt-3 text-black mx-2 bottom-4'>See All Products</button>
                </Link>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={image} alt="/" />
        </div>
    );
};

export default CategoryCart;