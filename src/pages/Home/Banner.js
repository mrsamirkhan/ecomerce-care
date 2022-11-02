import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-1/2">
                <img src={chair} />
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                        <div className=" max-w-md">
                        <h1 className="mb-7 text-5xl font-bold">Hello Visitors !</h1>
                        <p className="mb-7"> We are the Ecommerce-Care, Anouncing that this is the top discount offer month ! So why you are too late! go hurry up !</p>
                        <Link to="/login" className='btn btn-wide btn-outline uppercase'> Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


