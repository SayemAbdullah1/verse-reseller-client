import React from 'react';

const SingleCategory = ({ category, setProductItem }) => {
    const { name, picture, resalePrice, originalPrice, useYears, sellerName } = category
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Resale Price: <span className='font-bold'>${resalePrice}</span></p>
                <p>Original Price:<span className='font-bold'>${originalPrice}</span> </p>
                <p>Use of Years: <span className='font-bold'> {useYears}</span> </p>
                <p>Seller Name: {sellerName}</p>
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setProductItem(category)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;