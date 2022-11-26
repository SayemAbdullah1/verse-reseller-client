import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import SingleCategory from '../SingleCategory/SingleCategory';

const CategoryDetails = () => {
    const categoryData = useLoaderData()
    const [productItem, setProductItem] = useState(null)
    return (
        <div>
            <div className="text-6xl text-center text-secondary font-bold my-10">Product Details</div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-52 sm:mx-auto mx-auto'>
                {
                    categoryData.map(category => <SingleCategory key={category._id}
                    category={category}
                        setProductItem={setProductItem}
                    ></SingleCategory>)
                }
            </div>
            <div>
                {
                    productItem && <BookingModal
                        productItem={productItem}
                        setProductItem={setProductItem}
                    ></BookingModal>

                }
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default CategoryDetails;