import React from 'react';
import Services from '../Services/Services';
import Contact from '../shared/Contact';
import Banner from './Banner';

const Home = () => {
    return (
        <div >
            <Banner/>
            <Services/>
            <Contact/>
        </div>
    );
};

export default Home;