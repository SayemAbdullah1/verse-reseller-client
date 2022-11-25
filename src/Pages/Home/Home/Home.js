import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ServiceProvide from '../ServiceProvide/ServiceProvide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ServiceProvide></ServiceProvide>
        </div>
    );
};

export default Home;