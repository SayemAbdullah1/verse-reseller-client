import React from 'react';
import trust from '../../../assets/image/trust.png';
import trustIMG from '../../../assets/image/trustIMG.png';

const TrustShop = () => {

    return (
        <section className='h-screen'>
            <div style={{
                background: `url(${trust})`,
                backgroundSize: 'cover'
            }}>
                <div className="hero lg:max-w-6xl lg:mx-auto mt-24 ">
                    <div className="hero-content flex-col lg:flex-row lg:p-0 py-12 px-4">
                        <img src={trustIMG} alt='' className=" hidden lg:block max-w-lg rounded-lg bottom-0 -mt-36 pb-0 mb-0" data-aos="fade-up"
                            data-aos-duration="3000" />
                        <div className='lg:ml-12 bottom-0 p-4'>
                            <p className="text-secondary font-bold">Trust shop</p>
                            
                            <p className="py-3 text-white">One of the key advantages of using a resale car website is the vast selection of vehicles available. These websites allow users to browse and compare thousands of cars from the comfort of their own homes, saving time and effort compared to visiting multiple physical dealerships. Furthermore, many resale car websites offer detailed listings that include photos, specifications, and the history of the vehicle. This information can help potential buyers make informed decisions and avoid purchasing a vehicle with hidden problems.</p>
                            <button className='btn btn-secondary'>See details</button>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default TrustShop;