import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import OurProducts from '../OurProducts/OurProducts';
import ServiceProvide from '../ServiceProvide/ServiceProvide';
import TrustShop from '../TrustShop/TrustShop';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ServiceProvide></ServiceProvide>
            <OurProducts></OurProducts>
            <TrustShop></TrustShop>
        </div>
    );
};

export default Home;