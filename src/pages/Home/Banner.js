import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/banner.jpg';
import Services from '../Services/Services';

const Banner = () => {
    return (

        <div className='w-full bg-no-repeat bg-cover bg-center brightness-50' style= {{backgroundImage: `url(${chair})`, height: `45rem`}}>
            <div className='container'>
                <div className="hero">   
                    <div className='mt-60'>
                        <h1 className="text-4xl font-bold mx-5 ">Box Office News!</h1>
                        <p className="py-6 px-5 md:w-2/3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-outline ml-5"><Link to='/Services'>Shop Now </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


