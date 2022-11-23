import React from 'react';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Contact from '../shared/Contact';
import Banner from './Banner';

const Home = () => {
    return (
        <div >
            <Banner/>
            <Services/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;