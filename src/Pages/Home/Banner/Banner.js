import React from 'react';
import car from '../../../assets/image/banner.png'

const Banner = () => {
    return (
        <div className="hero h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={car} className="rounded-lg lg:w-1/2" alt='' />
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1 className="text-5xl text-secondary font-bold">Verse seller policy!</h1>
                    <p className="py-6">We provided a trusted and secured system which provide you to get second hand cars with good condition. We are with you!</p>
                    {/* <PrimaryButton>Getting Started</PrimaryButton> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;