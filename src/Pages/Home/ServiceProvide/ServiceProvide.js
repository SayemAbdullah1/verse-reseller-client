import React from 'react';
import servicePrivide from '../../../assets/image/serciceprovide.png'

const ServiceProvide = () => {
    return (
        <div className='h-screen' data-aos="fade-up"
            data-aos-duration="3000">
            <div className="text-5xl text-center font-bold mb-24 my-6 text-secondary">About our services</div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={servicePrivide} className="rounded-lg lg:w-1/2" alt='' />
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <h1 className="text-5xl text-secondary font-bold">Service we provided</h1>
                        <p className="py-6">
                            <ul className='text-1xl mt-4'>
                                <li className='p-2 font-bold'>Can buy a used car</li>
                                <li className='p-2 font-bold'>Choose different category car</li>
                                <li className='p-2 font-bold'>Good condition car provided</li>
                                <li className='p-2 font-bold'>Reasonable price</li>
                            </ul>
                        </p>
                        {/* <PrimaryButton>Getting Started</PrimaryButton> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProvide;