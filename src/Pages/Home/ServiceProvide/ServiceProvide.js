import React from 'react';
import servicePrivide from '../../../assets/image/serciceprovide.png'

const ServiceProvide = () => {
    return (
        <div>
            <div className="text-5xl text-center font-bold my-6 text-secondary">About our services</div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={servicePrivide} className="rounded-lg lg:w-1/2" alt='' />
                    <div>
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